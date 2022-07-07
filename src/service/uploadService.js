
class CldCustUploadLgRestApi  {
    constructor() {
        this.cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME ;
        this.presetName = process.env.REACT_APP_CLOUDINARY_PRESET_NAME ;
        this.postURL = process.env.REACT_APP_CLOUDINARY_POST_URL ;
        this.callBack = null;
    }
     processFile = async (e) => {
        debugger;
        const file = e.target.files[0];
        const fileName = file.name;
        const YOUR_CLOUD_NAME = this.cloudName;
         const YOUR_UNSIGNED_UPLOAD_PRESET = this.presetName;
        const POST_URL = this.postURL;


        const XUniqueUploadId = +new Date();

        processFile();

        function processFile(e) {
            const size = file.size;
            const sliceSize = 20000000;
            let start = 0;

            setTimeout(loop, 3);

            function loop() {
                let end = start + sliceSize;

                if (end > size) {
                    end = size;
                }
                var s = slice(file, start, end);
                send(s, start, end - 1, size);
                if (end < size) {
                    start += sliceSize;
                    setTimeout(loop, 3);
                }
            }
        }

        function send(piece, start, end, size) {
            console.log("start ", start);
            console.log("end", end);

            const formdata = new FormData();
            console.log(XUniqueUploadId);

            formdata.append("file", piece);
            formdata.append("cloud_name", YOUR_CLOUD_NAME);
            formdata.append("upload_preset", YOUR_UNSIGNED_UPLOAD_PRESET);
            formdata.append("public_id", fileName);

            const xhr = new XMLHttpRequest();
            xhr.open("POST", POST_URL, false);
            xhr.setRequestHeader("X-Unique-Upload-Id", XUniqueUploadId);
            xhr.setRequestHeader(
                "Content-Range",
                "bytes " + start + "-" + end + "/" + size
            );

            xhr.onload = function () {
                // do something to response
                console.log(this.responseText);
            };

            xhr.send(formdata);
        }

        function slice(file, start, end) {
            const slice = file.mozSlice
                ? file.mozSlice
                : file.webkitSlice
                    ? file.webkitSlice
                    : file.slice
                        ? file.slice
                        : noop;

            return slice.bind(file)(start, end);
        }

        function noop() {}
    };

    setCallBack(callback) {
        this.callBack = callback;
    }
}

export default CldCustUploadLgRestApi;
