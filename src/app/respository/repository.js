var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.keys = require('assets/keys.json');
        this.videos = null;
    }
    Repository.prototype.ngOnInit = function () {
        var _this = this;
        var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=angularjs&maxResults=12&key=" + this.keys.youtube;
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (videos) { return _this.videos = videos.items; }, function (error) { return console.error('Error'); }, function () { return console.log('completado'); });
    };
    Repository.prototype.selectVideo = function (id) {
        var _this = this;
        console.log(id);
        var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&channelId=" + id + "&key=" + this.keys.youtube;
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (videos) {
            _this.videos = videos.items;
            console.log(videos.items);
        }, function (error) { return console.error('Error:'); }, function () { return console.log('completado'); });
    };
    Repository = __decorate([
        core_1.Component({
            selector: 'repository',
            viewProviders: [http_1.HTTP_PROVIDERS],
            styles: [require('./repository.css')],
            template: require('./repository.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Repository);
    return Repository;
})();
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map