<template>
  <div>
    <div id='display' ref="display"></div>
    <div id="tx-content"></div>
  </div>
</template>

<script>
import $ from 'jquery'
// import $ from 'jquery';
import Guacamole from "guacamole-common-js";
import Utils from "@/utils/Utils";
import { getStorage } from "@/utils/cookie";

export default {
  name: "Content",
  props: {
    websocket_tunnel: {
      type: String,
      require: true
    },
    tunnel: {
      type: String,
      require: true
    },
    trainingId: {
      require: true
    },
    falg: {
      require: true
    }
  },
  data() {
    return {
      guac: null
    }
  },
  methods:{
    setClipboard(data){
      var writer;
      if (typeof data === 'string') {
        var stream = this.guac.createClipboardStream('text/plain');
        writer = new Guacamole.StringWriter(stream);
        writer.sendText(data);
        writer.sendEnd();
      }
    }
  },
  mounted() {
    let body = window.document.getElementsByTagName('body')[0];
    var display = this.$refs.display
    var tunnel;

    // If WebSocket available, try to use it.
    if (window.WebSocket)
      tunnel = new Guacamole.ChainedTunnel(
          new Guacamole.WebSocketTunnel(this.websocket_tunnel),
          new Guacamole.HTTPTunnel(this.tunnel)
      );

    // If no WebSocket, then use HTTP.
    else
      tunnel = new Guacamole.HTTPTunnel('tunnel');

    // Instantiate client, using an HTTP tunnel for communications.
    var guac = new Guacamole.Client(tunnel);
    this.guac = guac;

    // Add client to display div
    display.appendChild(guac.getDisplay().getElement());

    // Error handler
    guac.onerror = function (error) {
      console.log(error);
    };

    // Calculate optimal width/height for display
    let pixel_density = window.devicePixelRatio || 1;
    let optimal_dpi = pixel_density * 96;
    let optimal_width = window.innerWidth * pixel_density;
    let optimal_height = window.innerHeight * pixel_density;
    // 实验室
    if(1 == this.falg){
      body.className = 'lab_style';
      optimal_height = window.innerHeight * pixel_density-74;
    }else {
      body.className = 'training_style';
    }
    // const urlParams = new URLSearchParams(window.location.search);

    // Build base connect string
    let connectString =
        "GUAC_WIDTH=" + Math.floor(optimal_width)
        + "&GUAC_HEIGHT=" + Math.floor(optimal_height)
        + "&GUAC_DPI=" + Math.floor(optimal_dpi)
        + "&token=" + getStorage('ut')
        + "&trainingId=" + this.trainingId
    ;

    // Add audio mimetypes to connect string
    Guacamole.AudioPlayer.getSupportedTypes().forEach(function (mimetype) {
      connectString += "&GUAC_AUDIO=" + encodeURIComponent(mimetype);
    });

    // Connect
    guac.connect(connectString);

    // Disconnect on close
    window.onunload = function () {
      guac.disconnect();
    }

    // Mouse
    let mouse = new Guacamole.Mouse(guac.getDisplay().getElement());

    mouse.onmousedown =
        mouse.onmouseup =
            mouse.onmousemove = function (mouseState) {
              guac.sendMouseState(mouseState);
            };

    let editingInput = false;

    // Keyboard
    let keyboard = new Guacamole.Keyboard(document);

    keyboard.onkeydown = function (keysym) {
      if (!editingInput) {
        guac.sendKeyEvent(1, keysym);
      }
      return true;
    };

    keyboard.onkeyup = function (keysym) {
      if (!editingInput) {
        guac.sendKeyEvent(0, keysym);
      }
    };

    // Handle any received clipboard data
    guac.onclipboard = function clientClipboardReceived(stream, mimetype) {

      let reader;

      // If the received data is text, read it as a simple string
      if (/^text\//.exec(mimetype)) {

        reader = new Guacamole.StringReader(stream);

        // Assemble received data into a single string
        var data = '';
        reader.ontext = function textReceived(text) {
          data += text;
        };

        reader.onend = function textComplete() {
          $('#tx-content').val(data)
        }
      }
    };

    $('#btn-submit').on('click', function () {
      setClipboard($('#tx-content').val())
    });

    function setClipboard(data) {

      let writer;

      // Send data as a string if it is stored as a string
      if (typeof data === 'string') {
        // Create stream with proper mimetype
        var stream = guac.createClipboardStream('text/plain');
        writer = new Guacamole.StringWriter(stream);
        writer.sendText(data);
        writer.sendEnd();
      }

    }

    $('#tx-content').on('blur', function () {
      editingInput = false;
    }).on('focus', function () {
      editingInput = true;
    })

    // 暴露外部可以调用
    Utils.$on('setClipboard',this.setClipboard);
  }
}
</script>

<style scoped>
</style>