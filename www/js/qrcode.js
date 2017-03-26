function qrcodeScan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled) {
                alert("Barcode type is: " + result.format + "\n" + "Decoded text is: " + result.text);
            } else {
                alert("You have cancelled scan");
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}

function qrcodeCreate(toEncode) {
    cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, toEncode,
        function (success) {
            alert("Encode succes: " + success);
        },
        function (fail) {
            alert("Encoding failed: " + fail);
        }
    );
}