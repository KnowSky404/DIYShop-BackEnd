module.exports = {
    getBanners() {
        const mongoose = this.app.mongoose
        const Schema = mongoose.Schema
        const BannerSchema = new Schema({
            url: String,
            target: String
        })
        let banners = await mongoose.model('banner', BannerSchema)
        return banners
    }
};
