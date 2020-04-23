const BANNERMODEL = Symbol('Application#banner')
const USERMODEL = Symbol('Application#user')

module.exports = {
    get bannerModel() {
        if (!this[BANNERMODEL]) {
            const mongoose = this.mongoose
            const Schema = mongoose.Schema
            const BannerSchema = new Schema({
                url: String,
                target: String
            })
            this[BANNERMODEL] = mongoose.model('banner', BannerSchema)
        }
        return this[BANNERMODEL]
    },
    get userModel() {
        if (!this[USERMODEL]) {
            const mongoose = this.mongoose
            const Schema = mongoose.Schema
            const UserSchema = new Schema({
                name: String,
                password: String,
            })
            this[USERMODEL] = mongoose.model('user', UserSchema)
        }
        return this[USERMODEL]
    }
}
