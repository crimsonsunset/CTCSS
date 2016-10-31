window.ProjectNamespaceGoesHere = {
    urlPrefix: '../build/assets/'
};


$(document).ready(function () {

    var bodyEl = $('body');

    //first shims in hardcoded replacement for oddly formatted time string
    //second replaces spaces iwth underscores
    //third replace changes : to .
    //fourth replace removes all ending blocks
    var rawHTML = bodyEl.html()

        .replace(/(<time).*/g, function(inStr){
            return ''
        })

        .replace(/\{(.+?)\}/g, function(inStr){
            return inStr.split(' ').join('_')
        })

        .replace(/(\w+:)+/g, function (inStr) {
            return inStr.slice(0, -1) + '.';
        })

        .replace(/\{(\/.+?)\}/g,'');

    console.log(rawHTML);

    //now the html is sanitized, can utilize underscore's templating by replacing defaults with tumblr's { syntax
    _.templateSettings = {
        interpolate: /\{(.+?)\}/g
    };

    var templateFunc = _.template(rawHTML);

    var fakeData = {
        BlogURL: 'http://marvelentertainment.tumblr.com/',
        URL: 'http://google.com/',
        label: 'label',
        lang: {
            Archive: 'lang.Archive',
            //                'No posts containing SearchQuery': 'Lang.No posts containing SearchQuery'
            //                'Asker asked 2': 'lang.Asker asked 2'
        },
        text: {
            //                'On Sale Url': 'text.On Sale Url'
        },
        Title:'',
        Favicon:'',
        Description:'',
        PhotoURL:'',
        PhotoWidth:'',
        PhotoHeight:'',
        HighRes:'',
        PhotoAlt:'',
        Caption:'',
        Photoset:'',
        Quote:'',
        Source:'',
        Body:'',
        target:'',
        Name:'',
        Alt:'',
        UserNumber:'',
        Label:'',
        Line:'',
        Artist:'',
        TrackName:'',
        AlbumArtURL:'',
        AudioPlayer:'',
        Video:'',
        AskerPortraitURL:'',
        Question:'',
        Answer:'',
        Permalink:'',
        MonthNumber:'',
        DayOfMonth:'',
        Year:'',
        TagURL:'',
        Tag:'',
        NoteCount:'',
        ReblogURL:'',
        PostNotes:'',
        CurrentPage:'',
        TotalPages:'',
        block: {
            Description: '',
            IfShowPages: '',
            HasPages: '',
            Pages: ''
        }
    }

    var tmp = templateFunc(fakeData);

    bodyEl.html(tmp)

})
