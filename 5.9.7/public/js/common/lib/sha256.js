"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Sha256, Utf8;
  return {
    setters: [],
    execute: function () {
      /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
      /*  SHA-256 implementation in JavaScript | (c) Chris Veness 2002-2010 | www.movable-type.co.uk    */
      /*   - see http://csrc.nist.gov/groups/ST/toolkit/secure_hashing.html                             */
      /*         http://csrc.nist.gov/groups/ST/toolkit/examples.html                                   */
      /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
      Sha256 = {}; // Sha256 namespace
      _export("default", Sha256);
      /**
       * Generates SHA-256 hash of string
       *
       * @param {String} msg                String to be hashed
       * @param {Boolean} [utf8encode=true] Encode msg as UTF-8 before generating hash
       * @return {String}                  Hash of msg as hex character string
       */
      Sha256.hash = function (msg, utf8encode) {
        utf8encode = typeof utf8encode == 'undefined' ? true : utf8encode;

        // convert string to UTF-8, as SHA only deals with byte-streams
        if (utf8encode) msg = Utf8.encode(msg);

        // constants [§4.2.2]
        var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
        // initial hash value [§5.3.1]
        var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];

        // PREPROCESSING

        msg += String.fromCharCode(0x80); // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

        // convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
        var l = msg.length / 4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length
        var N = Math.ceil(l / 16); // number of 16-integer-blocks required to hold 'l' ints
        var M = new Array(N);
        for (var i = 0; i < N; i++) {
          M[i] = new Array(16);
          for (var j = 0; j < 16; j++) {
            // encode 4 chars per integer, big-endian encoding
            M[i][j] = msg.charCodeAt(i * 64 + j * 4) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3);
          } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
        }
        // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
        // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
        // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
        M[N - 1][14] = (msg.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (msg.length - 1) * 8 & 0xffffffff;

        // HASH COMPUTATION [§6.1.2]

        var W = new Array(64);
        var a;
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var h;
        for (var _i = 0; _i < N; _i++) {
          // 1 - prepare message schedule 'W'
          for (var t = 0; t < 16; t++) W[t] = M[_i][t];
          for (var _t = 16; _t < 64; _t++) W[_t] = Sha256.sigma11(W[_t - 2]) + W[_t - 7] + Sha256.sigma00(W[_t - 15]) + W[_t - 16] & 0xffffffff;

          // 2 - initialise working variables a, b, c, d, e, f, g, h with previous hash value
          a = H[0];
          b = H[1];
          c = H[2];
          d = H[3];
          e = H[4];
          f = H[5];
          g = H[6];
          h = H[7];

          // 3 - main loop (note 'addition modulo 2^32')
          for (var _t2 = 0; _t2 < 64; _t2++) {
            var T1 = h + Sha256.sigma1(e) + Sha256.ch(e, f, g) + K[_t2] + W[_t2];
            var T2 = Sha256.sigma0(a) + Sha256.maj(a, b, c);
            h = g;
            g = f;
            f = e;
            e = d + T1 & 0xffffffff;
            d = c;
            c = b;
            b = a;
            a = T1 + T2 & 0xffffffff;
          }
          // 4 - compute the new intermediate hash value (note 'addition modulo 2^32')
          H[0] = H[0] + a & 0xffffffff;
          H[1] = H[1] + b & 0xffffffff;
          H[2] = H[2] + c & 0xffffffff;
          H[3] = H[3] + d & 0xffffffff;
          H[4] = H[4] + e & 0xffffffff;
          H[5] = H[5] + f & 0xffffffff;
          H[6] = H[6] + g & 0xffffffff;
          H[7] = H[7] + h & 0xffffffff;
        }
        return Sha256.toHexStr(H[0]) + Sha256.toHexStr(H[1]) + Sha256.toHexStr(H[2]) + Sha256.toHexStr(H[3]) + Sha256.toHexStr(H[4]) + Sha256.toHexStr(H[5]) + Sha256.toHexStr(H[6]) + Sha256.toHexStr(H[7]);
      };
      Sha256.rotr = function (n, x) {
        return x >>> n | x << 32 - n;
      };
      Sha256.sigma0 = function (x) {
        return Sha256.rotr(2, x) ^ Sha256.rotr(13, x) ^ Sha256.rotr(22, x);
      };
      Sha256.sigma1 = function (x) {
        return Sha256.rotr(6, x) ^ Sha256.rotr(11, x) ^ Sha256.rotr(25, x);
      };
      Sha256.sigma00 = function (x) {
        return Sha256.rotr(7, x) ^ Sha256.rotr(18, x) ^ x >>> 3;
      };
      Sha256.sigma11 = function (x) {
        return Sha256.rotr(17, x) ^ Sha256.rotr(19, x) ^ x >>> 10;
      };
      Sha256.ch = function (x, y, z) {
        return x & y ^ ~x & z;
      };
      Sha256.maj = function (x, y, z) {
        return x & y ^ x & z ^ y & z;
      };

      //
      // hexadecimal representation of a number
      //   (note toString(16) is implementation-dependant, and
      //   in IE returns signed numbers when used on full words)
      //
      Sha256.toHexStr = function (n) {
        var s = '';
        var v;
        for (var i = 7; i >= 0; i--) {
          v = n >>> i * 4 & 0xf;
          s += v.toString(16);
        }
        return s;
      };

      /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
      /*  Utf8 class: encode / decode between multi-byte Unicode characters and UTF-8 multiple          */
      /*              single-byte character encoding (c) Chris Veness 2002-2010                         */
      /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
      Utf8 = {}; // Utf8 namespace
      /**
       * Encode multi-byte Unicode string into utf-8 multiple single-byte characters
       * (BMP / basic multilingual plane only)
       *
       * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
       *
       * @param {String} strUni Unicode string to be encoded as UTF-8
       * @return {String} encoded string
       */
      Utf8.encode = function (strUni) {
        // use regular expressions & String.replace callback function for better efficiency
        // than procedural approaches
        var strUtf = strUni.replace(/[\u0080-\u07ff]/g,
        // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
        function (c) {
          var cc = c.charCodeAt(0);
          return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
        });
        strUtf = strUtf.replace(/[\u0800-\uffff]/g,
        // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
        function (c) {
          var cc = c.charCodeAt(0);
          return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
        });
        return strUtf;
      };

      /**
       * Decode utf-8 encoded string back into multi-byte Unicode characters
       *
       * @param {String} strUtf UTF-8 string to be decoded back to Unicode
       * @return {String} decoded string
       */
      Utf8.decode = function (strUtf) {
        // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
        var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
        // 3-byte chars
        function (c) {
          // (note parentheses for precence)
          var cc = (c.charCodeAt(0) & 0x0f) << 12 | (c.charCodeAt(1) & 0x3f) << 6 | c.charCodeAt(2) & 0x3f;
          return String.fromCharCode(cc);
        });
        strUni = strUni.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,
        // 2-byte chars
        function (c) {
          // (note parentheses for precence)
          var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
          return String.fromCharCode(cc);
        });
        return strUni;
      };

      /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTaGEyNTYiLCJfZXhwb3J0IiwiaGFzaCIsIm1zZyIsInV0ZjhlbmNvZGUiLCJVdGY4IiwiZW5jb2RlIiwiSyIsIkgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJsIiwibGVuZ3RoIiwiTiIsIk1hdGgiLCJjZWlsIiwiTSIsIkFycmF5IiwiaSIsImoiLCJjaGFyQ29kZUF0IiwicG93IiwiZmxvb3IiLCJXIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiLCJ0Iiwic2lnbWExMSIsInNpZ21hMDAiLCJUMSIsInNpZ21hMSIsImNoIiwiVDIiLCJzaWdtYTAiLCJtYWoiLCJ0b0hleFN0ciIsInJvdHIiLCJuIiwieCIsInkiLCJ6IiwicyIsInYiLCJ0b1N0cmluZyIsInN0clVuaSIsInN0clV0ZiIsInJlcGxhY2UiLCJjYyIsImRlY29kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS13ZWIvanMvY29tbW9uL2xpYi9zaGEyNTYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICAqL1xuLyogIFNIQS0yNTYgaW1wbGVtZW50YXRpb24gaW4gSmF2YVNjcmlwdCB8IChjKSBDaHJpcyBWZW5lc3MgMjAwMi0yMDEwIHwgd3d3Lm1vdmFibGUtdHlwZS5jby51ayAgICAqL1xuLyogICAtIHNlZSBodHRwOi8vY3NyYy5uaXN0Lmdvdi9ncm91cHMvU1QvdG9vbGtpdC9zZWN1cmVfaGFzaGluZy5odG1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogICAgICAgICBodHRwOi8vY3NyYy5uaXN0Lmdvdi9ncm91cHMvU1QvdG9vbGtpdC9leGFtcGxlcy5odG1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICAqL1xuXG5jb25zdCBTaGEyNTYgPSB7fTsgLy8gU2hhMjU2IG5hbWVzcGFjZVxuXG5leHBvcnQgZGVmYXVsdCBTaGEyNTY7XG5cbi8qKlxuICogR2VuZXJhdGVzIFNIQS0yNTYgaGFzaCBvZiBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnICAgICAgICAgICAgICAgIFN0cmluZyB0byBiZSBoYXNoZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3V0ZjhlbmNvZGU9dHJ1ZV0gRW5jb2RlIG1zZyBhcyBVVEYtOCBiZWZvcmUgZ2VuZXJhdGluZyBoYXNoXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgSGFzaCBvZiBtc2cgYXMgaGV4IGNoYXJhY3RlciBzdHJpbmdcbiAqL1xuU2hhMjU2Lmhhc2ggPSBmdW5jdGlvbiAobXNnLCB1dGY4ZW5jb2RlKSB7XG4gIHV0ZjhlbmNvZGUgPSAodHlwZW9mIHV0ZjhlbmNvZGUgPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IHV0ZjhlbmNvZGU7XG5cbiAgLy8gY29udmVydCBzdHJpbmcgdG8gVVRGLTgsIGFzIFNIQSBvbmx5IGRlYWxzIHdpdGggYnl0ZS1zdHJlYW1zXG4gIGlmICh1dGY4ZW5jb2RlKSBtc2cgPSBVdGY4LmVuY29kZShtc2cpO1xuXG4gIC8vIGNvbnN0YW50cyBbwqc0LjIuMl1cbiAgY29uc3QgSyA9IFsweDQyOGEyZjk4LCAweDcxMzc0NDkxLCAweGI1YzBmYmNmLCAweGU5YjVkYmE1LCAweDM5NTZjMjViLCAweDU5ZjExMWYxLCAweDkyM2Y4MmE0LCAweGFiMWM1ZWQ1LFxuICAgIDB4ZDgwN2FhOTgsIDB4MTI4MzViMDEsIDB4MjQzMTg1YmUsIDB4NTUwYzdkYzMsIDB4NzJiZTVkNzQsIDB4ODBkZWIxZmUsIDB4OWJkYzA2YTcsIDB4YzE5YmYxNzQsXG4gICAgMHhlNDliNjljMSwgMHhlZmJlNDc4NiwgMHgwZmMxOWRjNiwgMHgyNDBjYTFjYywgMHgyZGU5MmM2ZiwgMHg0YTc0ODRhYSwgMHg1Y2IwYTlkYywgMHg3NmY5ODhkYSxcbiAgICAweDk4M2U1MTUyLCAweGE4MzFjNjZkLCAweGIwMDMyN2M4LCAweGJmNTk3ZmM3LCAweGM2ZTAwYmYzLCAweGQ1YTc5MTQ3LCAweDA2Y2E2MzUxLCAweDE0MjkyOTY3LFxuICAgIDB4MjdiNzBhODUsIDB4MmUxYjIxMzgsIDB4NGQyYzZkZmMsIDB4NTMzODBkMTMsIDB4NjUwYTczNTQsIDB4NzY2YTBhYmIsIDB4ODFjMmM5MmUsIDB4OTI3MjJjODUsXG4gICAgMHhhMmJmZThhMSwgMHhhODFhNjY0YiwgMHhjMjRiOGI3MCwgMHhjNzZjNTFhMywgMHhkMTkyZTgxOSwgMHhkNjk5MDYyNCwgMHhmNDBlMzU4NSwgMHgxMDZhYTA3MCxcbiAgICAweDE5YTRjMTE2LCAweDFlMzc2YzA4LCAweDI3NDg3NzRjLCAweDM0YjBiY2I1LCAweDM5MWMwY2IzLCAweDRlZDhhYTRhLCAweDViOWNjYTRmLCAweDY4MmU2ZmYzLFxuICAgIDB4NzQ4ZjgyZWUsIDB4NzhhNTYzNmYsIDB4ODRjODc4MTQsIDB4OGNjNzAyMDgsIDB4OTBiZWZmZmEsIDB4YTQ1MDZjZWIsIDB4YmVmOWEzZjcsIDB4YzY3MTc4ZjJdO1xuICAgIC8vIGluaXRpYWwgaGFzaCB2YWx1ZSBbwqc1LjMuMV1cbiAgY29uc3QgSCA9IFsweDZhMDllNjY3LCAweGJiNjdhZTg1LCAweDNjNmVmMzcyLCAweGE1NGZmNTNhLCAweDUxMGU1MjdmLCAweDliMDU2ODhjLCAweDFmODNkOWFiLCAweDViZTBjZDE5XTtcblxuICAvLyBQUkVQUk9DRVNTSU5HXG5cbiAgbXNnICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCk7IC8vIGFkZCB0cmFpbGluZyAnMScgYml0ICgrIDAncyBwYWRkaW5nKSB0byBzdHJpbmcgW8KnNS4xLjFdXG5cbiAgLy8gY29udmVydCBzdHJpbmcgbXNnIGludG8gNTEyLWJpdC8xNi1pbnRlZ2VyIGJsb2NrcyBhcnJheXMgb2YgaW50cyBbwqc1LjIuMV1cbiAgY29uc3QgbCA9IG1zZy5sZW5ndGgvNCArIDI7IC8vIGxlbmd0aCAoaW4gMzItYml0IGludGVnZXJzKSBvZiBtc2cgKyDigJgx4oCZICsgYXBwZW5kZWQgbGVuZ3RoXG4gIGNvbnN0IE4gPSBNYXRoLmNlaWwobC8xNik7IC8vIG51bWJlciBvZiAxNi1pbnRlZ2VyLWJsb2NrcyByZXF1aXJlZCB0byBob2xkICdsJyBpbnRzXG4gIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yIChsZXQgaT0wOyBpPE47IGkrKykge1xuICAgIE1baV0gPSBuZXcgQXJyYXkoMTYpO1xuICAgIGZvciAobGV0IGo9MDsgajwxNjsgaisrKSB7IC8vIGVuY29kZSA0IGNoYXJzIHBlciBpbnRlZ2VyLCBiaWctZW5kaWFuIGVuY29kaW5nXG4gICAgICBNW2ldW2pdID0gKG1zZy5jaGFyQ29kZUF0KGkqNjQraio0KTw8MjQpIHwgKG1zZy5jaGFyQ29kZUF0KGkqNjQraio0KzEpPDwxNikgfFxuICAgICAgICAgICAgICAgICAgICAgIChtc2cuY2hhckNvZGVBdChpKjY0K2oqNCsyKTw8OCkgfCAobXNnLmNoYXJDb2RlQXQoaSo2NCtqKjQrMykpO1xuICAgIH0gLy8gbm90ZSBydW5uaW5nIG9mZiB0aGUgZW5kIG9mIG1zZyBpcyBvayAnY29zIGJpdHdpc2Ugb3BzIG9uIE5hTiByZXR1cm4gMFxuICB9XG4gIC8vIGFkZCBsZW5ndGggKGluIGJpdHMpIGludG8gZmluYWwgcGFpciBvZiAzMi1iaXQgaW50ZWdlcnMgKGJpZy1lbmRpYW4pIFvCpzUuMS4xXVxuICAvLyBub3RlOiBtb3N0IHNpZ25pZmljYW50IHdvcmQgd291bGQgYmUgKGxlbi0xKSo4ID4+PiAzMiwgYnV0IHNpbmNlIEpTIGNvbnZlcnRzXG4gIC8vIGJpdHdpc2Utb3AgYXJncyB0byAzMiBiaXRzLCB3ZSBuZWVkIHRvIHNpbXVsYXRlIHRoaXMgYnkgYXJpdGhtZXRpYyBvcGVyYXRvcnNcbiAgTVtOLTFdWzE0XSA9ICgobXNnLmxlbmd0aC0xKSo4KSAvIE1hdGgucG93KDIsIDMyKTsgTVtOLTFdWzE0XSA9IE1hdGguZmxvb3IoTVtOLTFdWzE0XSk7XG4gIE1bTi0xXVsxNV0gPSAoKG1zZy5sZW5ndGgtMSkqOCkgJiAweGZmZmZmZmZmO1xuXG5cbiAgLy8gSEFTSCBDT01QVVRBVElPTiBbwqc2LjEuMl1cblxuICBjb25zdCBXID0gbmV3IEFycmF5KDY0KTsgbGV0IGE7IGxldCBiOyBsZXQgYzsgbGV0IGQ7IGxldCBlOyBsZXQgZjsgbGV0IGc7IGxldCBoO1xuICBmb3IgKGxldCBpPTA7IGk8TjsgaSsrKSB7XG4gICAgLy8gMSAtIHByZXBhcmUgbWVzc2FnZSBzY2hlZHVsZSAnVydcbiAgICBmb3IgKGxldCB0PTA7IHQ8MTY7IHQrKykgV1t0XSA9IE1baV1bdF07XG4gICAgZm9yIChsZXQgdD0xNjsgdDw2NDsgdCsrKSBXW3RdID0gKFNoYTI1Ni5zaWdtYTExKFdbdC0yXSkgKyBXW3QtN10gKyBTaGEyNTYuc2lnbWEwMChXW3QtMTVdKSArIFdbdC0xNl0pICYgMHhmZmZmZmZmZjtcblxuICAgIC8vIDIgLSBpbml0aWFsaXNlIHdvcmtpbmcgdmFyaWFibGVzIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGggd2l0aCBwcmV2aW91cyBoYXNoIHZhbHVlXG4gICAgYSA9IEhbMF07IGIgPSBIWzFdOyBjID0gSFsyXTsgZCA9IEhbM107IGUgPSBIWzRdOyBmID0gSFs1XTsgZyA9IEhbNl07IGggPSBIWzddO1xuXG4gICAgLy8gMyAtIG1haW4gbG9vcCAobm90ZSAnYWRkaXRpb24gbW9kdWxvIDJeMzInKVxuICAgIGZvciAobGV0IHQ9MDsgdDw2NDsgdCsrKSB7XG4gICAgICBjb25zdCBUMSA9IGggKyBTaGEyNTYuc2lnbWExKGUpICsgU2hhMjU2LmNoKGUsIGYsIGcpICsgS1t0XSArIFdbdF07XG4gICAgICBjb25zdCBUMiA9IFNoYTI1Ni5zaWdtYTAoYSkgKyBTaGEyNTYubWFqKGEsIGIsIGMpO1xuICAgICAgaCA9IGc7XG4gICAgICBnID0gZjtcbiAgICAgIGYgPSBlO1xuICAgICAgZSA9IChkICsgVDEpICYgMHhmZmZmZmZmZjtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IGI7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSAoVDEgKyBUMikgJiAweGZmZmZmZmZmO1xuICAgIH1cbiAgICAvLyA0IC0gY29tcHV0ZSB0aGUgbmV3IGludGVybWVkaWF0ZSBoYXNoIHZhbHVlIChub3RlICdhZGRpdGlvbiBtb2R1bG8gMl4zMicpXG4gICAgSFswXSA9IChIWzBdK2EpICYgMHhmZmZmZmZmZjtcbiAgICBIWzFdID0gKEhbMV0rYikgJiAweGZmZmZmZmZmO1xuICAgIEhbMl0gPSAoSFsyXStjKSAmIDB4ZmZmZmZmZmY7XG4gICAgSFszXSA9IChIWzNdK2QpICYgMHhmZmZmZmZmZjtcbiAgICBIWzRdID0gKEhbNF0rZSkgJiAweGZmZmZmZmZmO1xuICAgIEhbNV0gPSAoSFs1XStmKSAmIDB4ZmZmZmZmZmY7XG4gICAgSFs2XSA9IChIWzZdK2cpICYgMHhmZmZmZmZmZjtcbiAgICBIWzddID0gKEhbN10raCkgJiAweGZmZmZmZmZmO1xuICB9XG5cbiAgcmV0dXJuIFNoYTI1Ni50b0hleFN0cihIWzBdKSArIFNoYTI1Ni50b0hleFN0cihIWzFdKSArIFNoYTI1Ni50b0hleFN0cihIWzJdKSArIFNoYTI1Ni50b0hleFN0cihIWzNdKSArXG4gICAgICAgICAgIFNoYTI1Ni50b0hleFN0cihIWzRdKSArIFNoYTI1Ni50b0hleFN0cihIWzVdKSArIFNoYTI1Ni50b0hleFN0cihIWzZdKSArIFNoYTI1Ni50b0hleFN0cihIWzddKTtcbn07XG5cblNoYTI1Ni5yb3RyID0gZnVuY3Rpb24gKG4sIHgpIHtcbiAgcmV0dXJuICh4ID4+PiBuKSB8ICh4IDw8ICgzMi1uKSk7XG59O1xuU2hhMjU2LnNpZ21hMCA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiBTaGEyNTYucm90cigyLCB4KSBeIFNoYTI1Ni5yb3RyKDEzLCB4KSBeIFNoYTI1Ni5yb3RyKDIyLCB4KTtcbn07XG5TaGEyNTYuc2lnbWExID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIFNoYTI1Ni5yb3RyKDYsIHgpIF4gU2hhMjU2LnJvdHIoMTEsIHgpIF4gU2hhMjU2LnJvdHIoMjUsIHgpO1xufTtcblNoYTI1Ni5zaWdtYTAwID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIFNoYTI1Ni5yb3RyKDcsIHgpIF4gU2hhMjU2LnJvdHIoMTgsIHgpIF4gKHg+Pj4zKTtcbn07XG5TaGEyNTYuc2lnbWExMSA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiBTaGEyNTYucm90cigxNywgeCkgXiBTaGEyNTYucm90cigxOSwgeCkgXiAoeD4+PjEwKTtcbn07XG5TaGEyNTYuY2ggPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xufTtcblNoYTI1Ni5tYWogPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICByZXR1cm4gKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopO1xufTtcblxuLy9cbi8vIGhleGFkZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9mIGEgbnVtYmVyXG4vLyAgIChub3RlIHRvU3RyaW5nKDE2KSBpcyBpbXBsZW1lbnRhdGlvbi1kZXBlbmRhbnQsIGFuZFxuLy8gICBpbiBJRSByZXR1cm5zIHNpZ25lZCBudW1iZXJzIHdoZW4gdXNlZCBvbiBmdWxsIHdvcmRzKVxuLy9cblNoYTI1Ni50b0hleFN0ciA9IGZ1bmN0aW9uIChuKSB7XG4gIGxldCBzPScnOyBsZXQgdjtcbiAgZm9yIChsZXQgaT03OyBpPj0wOyBpLS0pIHtcbiAgICB2ID0gKG4+Pj4oaSo0KSkgJiAweGY7IHMgKz0gdi50b1N0cmluZygxNik7XG4gIH1cbiAgcmV0dXJuIHM7XG59O1xuXG5cbi8qIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAgKi9cbi8qICBVdGY4IGNsYXNzOiBlbmNvZGUgLyBkZWNvZGUgYmV0d2VlbiBtdWx0aS1ieXRlIFVuaWNvZGUgY2hhcmFjdGVycyBhbmQgVVRGLTggbXVsdGlwbGUgICAgICAgICAgKi9cbi8qICAgICAgICAgICAgICBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXIgZW5jb2RpbmcgKGMpIENocmlzIFZlbmVzcyAyMDAyLTIwMTAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAgKi9cblxuY29uc3QgVXRmOCA9IHt9OyAvLyBVdGY4IG5hbWVzcGFjZVxuXG4vKipcbiAqIEVuY29kZSBtdWx0aS1ieXRlIFVuaWNvZGUgc3RyaW5nIGludG8gdXRmLTggbXVsdGlwbGUgc2luZ2xlLWJ5dGUgY2hhcmFjdGVyc1xuICogKEJNUCAvIGJhc2ljIG11bHRpbGluZ3VhbCBwbGFuZSBvbmx5KVxuICpcbiAqIENoYXJzIGluIHJhbmdlIFUrMDA4MCAtIFUrMDdGRiBhcmUgZW5jb2RlZCBpbiAyIGNoYXJzLCBVKzA4MDAgLSBVK0ZGRkYgaW4gMyBjaGFyc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJVbmkgVW5pY29kZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBhcyBVVEYtOFxuICogQHJldHVybiB7U3RyaW5nfSBlbmNvZGVkIHN0cmluZ1xuICovXG5VdGY4LmVuY29kZSA9IGZ1bmN0aW9uIChzdHJVbmkpIHtcbiAgLy8gdXNlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgJiBTdHJpbmcucmVwbGFjZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgYmV0dGVyIGVmZmljaWVuY3lcbiAgLy8gdGhhbiBwcm9jZWR1cmFsIGFwcHJvYWNoZXNcbiAgbGV0IHN0clV0ZiA9IHN0clVuaS5yZXBsYWNlKFxuICAgIC9bXFx1MDA4MC1cXHUwN2ZmXS9nLCAvLyBVKzAwODAgLSBVKzA3RkYgPT4gMiBieXRlcyAxMTB5eXl5eSwgMTB6enp6enpcbiAgICBmdW5jdGlvbiAoYykge1xuICAgICAgY29uc3QgY2MgPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGMwIHwgY2M+PjYsIDB4ODAgfCBjYyYweDNmKTtcbiAgICB9LFxuICApO1xuICBzdHJVdGYgPSBzdHJVdGYucmVwbGFjZShcbiAgICAvW1xcdTA4MDAtXFx1ZmZmZl0vZywgLy8gVSswODAwIC0gVStGRkZGID0+IDMgYnl0ZXMgMTExMHh4eHgsIDEweXl5eXl5LCAxMHp6enp6elxuICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICBjb25zdCBjYyA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTAgfCBjYz4+MTIsIDB4ODAgfCBjYz4+NiYweDNGLCAweDgwIHwgY2MmMHgzZik7XG4gICAgfSxcbiAgKTtcbiAgcmV0dXJuIHN0clV0Zjtcbn07XG5cbi8qKlxuICogRGVjb2RlIHV0Zi04IGVuY29kZWQgc3RyaW5nIGJhY2sgaW50byBtdWx0aS1ieXRlIFVuaWNvZGUgY2hhcmFjdGVyc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJVdGYgVVRGLTggc3RyaW5nIHRvIGJlIGRlY29kZWQgYmFjayB0byBVbmljb2RlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGRlY29kZWQgc3RyaW5nXG4gKi9cblV0ZjguZGVjb2RlID0gZnVuY3Rpb24gKHN0clV0Zikge1xuICAvLyBub3RlOiBkZWNvZGUgMy1ieXRlIGNoYXJzIGZpcnN0IGFzIGRlY29kZWQgMi1ieXRlIHN0cmluZ3MgY291bGQgYXBwZWFyIHRvIGJlIDMtYnl0ZSBjaGFyIVxuICBsZXQgc3RyVW5pID0gc3RyVXRmLnJlcGxhY2UoXG4gICAgL1tcXHUwMGUwLVxcdTAwZWZdW1xcdTAwODAtXFx1MDBiZl1bXFx1MDA4MC1cXHUwMGJmXS9nLCAvLyAzLWJ5dGUgY2hhcnNcbiAgICBmdW5jdGlvbiAoYykgeyAvLyAobm90ZSBwYXJlbnRoZXNlcyBmb3IgcHJlY2VuY2UpXG4gICAgICBjb25zdCBjYyA9ICgoYy5jaGFyQ29kZUF0KDApJjB4MGYpPDwxMikgfCAoKGMuY2hhckNvZGVBdCgxKSYweDNmKTw8NikgfCAoIGMuY2hhckNvZGVBdCgyKSYweDNmKTtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNjKTtcbiAgICB9LFxuICApO1xuICBzdHJVbmkgPSBzdHJVbmkucmVwbGFjZShcbiAgICAvW1xcdTAwYzAtXFx1MDBkZl1bXFx1MDA4MC1cXHUwMGJmXS9nLCAvLyAyLWJ5dGUgY2hhcnNcbiAgICBmdW5jdGlvbiAoYykgeyAvLyAobm90ZSBwYXJlbnRoZXNlcyBmb3IgcHJlY2VuY2UpXG4gICAgICBjb25zdCBjYyA9IChjLmNoYXJDb2RlQXQoMCkmMHgxZik8PDYgfCBjLmNoYXJDb2RlQXQoMSkmMHgzZjtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNjKTtcbiAgICB9LFxuICApO1xuICByZXR1cm4gc3RyVW5pO1xufTtcblxuLyogLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICAqL1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRU1BLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtNQUFBQyxPQUFBLFlBRUpELE1BQU07TUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDQUEsTUFBTSxDQUFDRSxJQUFJLEdBQUcsVUFBVUMsR0FBRyxFQUFFQyxVQUFVLEVBQUU7UUFDdkNBLFVBQVUsR0FBSSxPQUFPQSxVQUFVLElBQUksV0FBVyxHQUFJLElBQUksR0FBR0EsVUFBVTs7UUFFbkU7UUFDQSxJQUFJQSxVQUFVLEVBQUVELEdBQUcsR0FBR0UsSUFBSSxDQUFDQyxNQUFNLENBQUNILEdBQUcsQ0FBQzs7UUFFdEM7UUFDQSxJQUFNSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUN2RyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM5RixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM5RixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM5RixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM5RixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM5RixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUM5RixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1FBQy9GO1FBQ0YsSUFBTUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQzs7UUFFMUc7O1FBRUFMLEdBQUcsSUFBSU0sTUFBTSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7UUFFbEM7UUFDQSxJQUFNQyxDQUFDLEdBQUdSLEdBQUcsQ0FBQ1MsTUFBTSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDSixDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFNSyxDQUFDLEdBQUcsSUFBSUMsS0FBSyxDQUFDSixDQUFDLENBQUM7UUFFdEIsS0FBSyxJQUFJSyxDQUFDLEdBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUNMLENBQUMsRUFBRUssQ0FBQyxFQUFFLEVBQUU7VUFDdEJGLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLEdBQUcsSUFBSUQsS0FBSyxDQUFDLEVBQUUsQ0FBQztVQUNwQixLQUFLLElBQUlFLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsR0FBQyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO1lBQUU7WUFDekJILENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFJaEIsR0FBRyxDQUFDaUIsVUFBVSxDQUFDRixDQUFDLEdBQUMsRUFBRSxHQUFDQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFLaEIsR0FBRyxDQUFDaUIsVUFBVSxDQUFDRixDQUFDLEdBQUMsRUFBRSxHQUFDQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUcsR0FDMURoQixHQUFHLENBQUNpQixVQUFVLENBQUNGLENBQUMsR0FBQyxFQUFFLEdBQUNDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBRSxHQUFJaEIsR0FBRyxDQUFDaUIsVUFBVSxDQUFDRixDQUFDLEdBQUMsRUFBRSxHQUFDQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBRTtVQUNoRixDQUFDLENBQUM7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBSCxDQUFDLENBQUNILENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBSSxDQUFDVixHQUFHLENBQUNTLE1BQU0s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