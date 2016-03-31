import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({

    selector: 'repository',
    viewProviders: [HTTP_PROVIDERS],
    styles: [require('./repository.css')],
    template: require('./repository.html')
})
export class Repository {

    public keys = require('assets/keys.json');
    public videos = null;

    constructor(public http:Http) {
    }


    ngOnInit() {
        var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=angularjs&maxResults=12&key=${this.keys.youtube}`;
        this.http.get(url)
            .map(res => res.json())
            .subscribe(
                videos => this.videos = videos.items,
                error => console.error('Error'),
                () => console.log('completado')
            );
    }


    selectVideo(id) {
        console.log(id);
        var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&channelId=${id}&key=${this.keys.youtube}`;
        this.http.get(url)
            .map(res => res.json())
            .subscribe(
                videos => {
                    this.videos = videos.items;
                    console.log(videos.items);
                },
                error => console.error('Error:'),
                () => console.log('completado')
            );
    }


}
