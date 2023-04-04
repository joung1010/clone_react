

class UploadService  {
    constructor(api) {
        this.cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME ;
        this.presetName = process.env.REACT_APP_CLOUDINARY_PRESET_NAME ;
        this.postURL = process.env.REACT_APP_CLOUDINARY_POST_URL ;
        this.api = api
    }

    async upload(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", this.presetName);

        const response = await this.api.post(`${this.cloudName}/image/upload`,formData);
        return response.data;
    }
}

export default UploadService;
