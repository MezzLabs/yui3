if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/history-html5/history-html5.js']) {
   __coverage__['build/history-html5/history-html5.js'] = {"path":"build/history-html5/history-html5.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0],"6":[0,0],"7":[0,0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"HistoryHTML5","line":57,"loc":{"start":{"line":57,"column":0},"end":{"line":57,"column":24}}},"3":{"name":"(anonymous_3)","line":63,"loc":{"start":{"line":63,"column":11},"end":{"line":63,"column":29}}},"4":{"name":"(anonymous_4)","line":104,"loc":{"start":{"line":104,"column":17},"end":{"line":104,"column":51}}},"5":{"name":"(anonymous_5)","line":125,"loc":{"start":{"line":125,"column":17},"end":{"line":125,"column":30}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":183,"column":97}},"2":{"start":{"line":49,"column":0},"end":{"line":55,"column":46}},"3":{"start":{"line":57,"column":0},"end":{"line":59,"column":1}},"4":{"start":{"line":58,"column":4},"end":{"line":58,"column":63}},"5":{"start":{"line":61,"column":0},"end":{"line":142,"column":3}},"6":{"start":{"line":64,"column":8},"end":{"line":64,"column":48}},"7":{"start":{"line":67,"column":8},"end":{"line":69,"column":9}},"8":{"start":{"line":68,"column":12},"end":{"line":68,"column":35}},"9":{"start":{"line":71,"column":8},"end":{"line":71,"column":32}},"10":{"start":{"line":75,"column":8},"end":{"line":85,"column":9}},"11":{"start":{"line":79,"column":12},"end":{"line":79,"column":79}},"12":{"start":{"line":84,"column":12},"end":{"line":84,"column":49}},"13":{"start":{"line":87,"column":8},"end":{"line":87,"column":54}},"14":{"start":{"line":89,"column":8},"end":{"line":89,"column":61}},"15":{"start":{"line":105,"column":8},"end":{"line":111,"column":9}},"16":{"start":{"line":106,"column":12},"end":{"line":110,"column":14}},"17":{"start":{"line":113,"column":8},"end":{"line":113,"column":67}},"18":{"start":{"line":126,"column":8},"end":{"line":126,"column":67}},"19":{"start":{"line":144,"column":0},"end":{"line":146,"column":1}},"20":{"start":{"line":145,"column":4},"end":{"line":145,"column":35}},"21":{"start":{"line":148,"column":0},"end":{"line":148,"column":30}},"22":{"start":{"line":177,"column":0},"end":{"line":180,"column":1}},"23":{"start":{"line":179,"column":4},"end":{"line":179,"column":29}}},"branchMap":{"1":{"line":67,"type":"if","locations":[{"start":{"line":67,"column":8},"end":{"line":67,"column":8}},{"start":{"line":67,"column":8},"end":{"line":67,"column":8}}]},"2":{"line":71,"type":"binary-expr","locations":[{"start":{"line":71,"column":8},"end":{"line":71,"column":14}},{"start":{"line":71,"column":19},"end":{"line":71,"column":30}}]},"3":{"line":75,"type":"if","locations":[{"start":{"line":75,"column":8},"end":{"line":75,"column":8}},{"start":{"line":75,"column":8},"end":{"line":75,"column":8}}]},"4":{"line":75,"type":"binary-expr","locations":[{"start":{"line":75,"column":12},"end":{"line":75,"column":31}},{"start":{"line":76,"column":19},"end":{"line":76,"column":62}},{"start":{"line":77,"column":19},"end":{"line":77,"column":58}}]},"5":{"line":105,"type":"if","locations":[{"start":{"line":105,"column":8},"end":{"line":105,"column":8}},{"start":{"line":105,"column":8},"end":{"line":105,"column":8}}]},"6":{"line":106,"type":"cond-expr","locations":[{"start":{"line":106,"column":46},"end":{"line":106,"column":60}},{"start":{"line":106,"column":63},"end":{"line":106,"column":74}}]},"7":{"line":108,"type":"binary-expr","locations":[{"start":{"line":108,"column":16},"end":{"line":108,"column":29}},{"start":{"line":108,"column":33},"end":{"line":108,"column":51}},{"start":{"line":108,"column":55},"end":{"line":108,"column":57}}]},"8":{"line":109,"type":"binary-expr","locations":[{"start":{"line":109,"column":16},"end":{"line":109,"column":27}},{"start":{"line":109,"column":31},"end":{"line":109,"column":43}}]},"9":{"line":126,"type":"binary-expr","locations":[{"start":{"line":126,"column":43},"end":{"line":126,"column":57}},{"start":{"line":126,"column":61},"end":{"line":126,"column":65}}]},"10":{"line":144,"type":"if","locations":[{"start":{"line":144,"column":0},"end":{"line":144,"column":0}},{"start":{"line":144,"column":0},"end":{"line":144,"column":0}}]},"11":{"line":177,"type":"if","locations":[{"start":{"line":177,"column":0},"end":{"line":177,"column":0}},{"start":{"line":177,"column":0},"end":{"line":177,"column":0}}]},"12":{"line":177,"type":"binary-expr","locations":[{"start":{"line":177,"column":4},"end":{"line":177,"column":28}},{"start":{"line":177,"column":33},"end":{"line":177,"column":58}},{"start":{"line":178,"column":8},"end":{"line":178,"column":25}}]}},"code":["(function () { YUI.add('history-html5', function (Y, NAME) {","","/**"," * Provides browser history management using the HTML5 history API."," *"," * @module history"," * @submodule history-html5"," * @since 3.2.0"," */","","/**"," * <p>"," * Provides browser history management using the HTML5 history API."," * </p>"," *"," * <p>"," * When calling the <code>add()</code>, <code>addValue()</code>,"," * <code>replace()</code>, or <code>replaceValue()</code> methods on"," * <code>HistoryHTML5</code>, the following additional options are supported:"," * </p>"," *"," * <dl>"," *   <dt><strong>title (String)</strong></dt>"," *   <dd>"," *     Title to use for the new history entry. Browsers will typically display"," *     this title to the user in the detailed history window or in a dropdown"," *     menu attached to the back/forward buttons. If not specified, the title"," *     of the current document will be used."," *   </dd>"," *"," *   <dt><strong>url (String)</strong></dt>"," *   <dd>"," *     URL to display to the user for the new history entry. This URL will be"," *     visible in the browser's address bar and will be the bookmarked URL if"," *     the user bookmarks the page. It may be a relative path (\"foo/bar\"), an"," *     absolute path (\"/foo/bar\"), or a full URL (\"http://example.com/foo/bar\")."," *     If you specify a full URL, the origin <i>must</i> be the same as the"," *     origin of the current page, or an error will occur. If no URL is"," *     specified, the current URL will not be changed."," *   </dd>"," * </dl>"," *"," * @class HistoryHTML5"," * @extends HistoryBase"," * @constructor"," * @param {Object} config (optional) Configuration object."," */","","var HistoryBase     = Y.HistoryBase,","    Lang            = Y.Lang,","    win             = Y.config.win,","    useHistoryHTML5 = Y.config.useHistoryHTML5,","","    SRC_POPSTATE    = 'popstate',","    SRC_REPLACE     = HistoryBase.SRC_REPLACE;","","function HistoryHTML5() {","    HistoryHTML5.superclass.constructor.apply(this, arguments);","}","","Y.extend(HistoryHTML5, HistoryBase, {","    // -- Initialization -------------------------------------------------------","    _init: function (config) {","        var bookmarkedState = win.history.state;","","        // Treat empty state objects as `null` so they're not processed further.","        if (Y.Object.isEmpty(bookmarkedState)) {","            bookmarkedState = null;","        }","","        config || (config = {});","","        // If both the initial state and the bookmarked state are objects, merge","        // them (bookmarked state wins).","        if (config.initialState","                && Lang.type(config.initialState) === 'object'","                && Lang.type(bookmarkedState) === 'object') {","","            this._initialState = Y.merge(config.initialState, bookmarkedState);","        } else {","            // Otherwise, the bookmarked state always wins if there is one. If","            // there isn't a bookmarked state, history-base will take care of","            // falling back to config.initialState or null.","            this._initialState = bookmarkedState;","        }","","        Y.on('popstate', this._onPopState, win, this);","","        HistoryHTML5.superclass._init.apply(this, arguments);","    },","","    // -- Protected Methods ----------------------------------------------------","","    /**","     * Overrides HistoryBase's <code>_storeState()</code> and pushes or replaces","     * a history entry using the HTML5 history API when necessary.","     *","     * @method _storeState","     * @param {String} src Source of the changes.","     * @param {Object} newState New state to store.","     * @param {Object} options Zero or more options.","     * @protected","     */","    _storeState: function (src, newState, options) {","        if (src !== SRC_POPSTATE) {","            win.history[src === SRC_REPLACE ? 'replaceState' : 'pushState'](","                newState,","                options.title || Y.config.doc.title || '',","                options.url || document.URL","            );","        }","","        HistoryHTML5.superclass._storeState.apply(this, arguments);","    },","","    // -- Protected Event Handlers ---------------------------------------------","","    /**","     * Handler for popstate events.","     *","     * @method _onPopState","     * @param {Event} e","     * @protected","     */","    _onPopState: function (e) {","        this._resolveChanges(SRC_POPSTATE, e._event.state || null);","    }","}, {","    // -- Public Static Properties ---------------------------------------------","    NAME: 'historyhtml5',","","    /**","     * Constant used to identify state changes originating from","     * <code>popstate</code> events.","     *","     * @property SRC_POPSTATE","     * @type String","     * @static","     * @final","     */","    SRC_POPSTATE: SRC_POPSTATE","});","","if (!Y.Node.DOM_EVENTS.popstate) {","    Y.Node.DOM_EVENTS.popstate = 1;","}","","Y.HistoryHTML5 = HistoryHTML5;","","/**"," * <p>"," * If <code>true</code>, the <code>Y.History</code> alias will always point to"," * <code>Y.HistoryHTML5</code> when the history-html5 module is loaded, even if"," * the current browser doesn't support HTML5 history."," * </p>"," *"," * <p>"," * If <code>false</code>, the <code>Y.History</code> alias will always point to"," * <code>Y.HistoryHash</code> when the history-hash module is loaded, even if"," * the current browser supports HTML5 history."," * </p>"," *"," * <p>"," * If neither <code>true</code> nor <code>false</code>, the"," * <code>Y.History</code> alias will point to the best available history adapter"," * that the browser supports. This is the default behavior."," * </p>"," *"," * @property useHistoryHTML5"," * @type boolean"," * @for config"," * @since 3.2.0"," */","","// HistoryHTML5 will always win over HistoryHash unless useHistoryHTML5 is false","// or HTML5 history is not supported.","if (useHistoryHTML5 === true || (useHistoryHTML5 !== false &&","        HistoryBase.html5)) {","    Y.History = HistoryHTML5;","}","","","}, '@VERSION@', {\"optional\": [\"json\"], \"requires\": [\"event-base\", \"history-base\", \"node-base\"]});","","}());"]};
}
var __cov_NFPIa1bKbyM4xoYxYAMxhQ = __coverage__['build/history-html5/history-html5.js'];
__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['1']++;YUI.add('history-html5',function(Y,NAME){__cov_NFPIa1bKbyM4xoYxYAMxhQ.f['1']++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['2']++;var HistoryBase=Y.HistoryBase,Lang=Y.Lang,win=Y.config.win,useHistoryHTML5=Y.config.useHistoryHTML5,SRC_POPSTATE='popstate',SRC_REPLACE=HistoryBase.SRC_REPLACE;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['3']++;function HistoryHTML5(){__cov_NFPIa1bKbyM4xoYxYAMxhQ.f['2']++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['4']++;HistoryHTML5.superclass.constructor.apply(this,arguments);}__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['5']++;Y.extend(HistoryHTML5,HistoryBase,{_init:function(config){__cov_NFPIa1bKbyM4xoYxYAMxhQ.f['3']++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['6']++;var bookmarkedState=win.history.state;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['7']++;if(Y.Object.isEmpty(bookmarkedState)){__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['1'][0]++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['8']++;bookmarkedState=null;}else{__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['1'][1]++;}__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['9']++;(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['2'][0]++,config)||(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['2'][1]++,config={});__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['10']++;if((__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['4'][0]++,config.initialState)&&(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['4'][1]++,Lang.type(config.initialState)==='object')&&(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['4'][2]++,Lang.type(bookmarkedState)==='object')){__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['3'][0]++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['11']++;this._initialState=Y.merge(config.initialState,bookmarkedState);}else{__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['3'][1]++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['12']++;this._initialState=bookmarkedState;}__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['13']++;Y.on('popstate',this._onPopState,win,this);__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['14']++;HistoryHTML5.superclass._init.apply(this,arguments);},_storeState:function(src,newState,options){__cov_NFPIa1bKbyM4xoYxYAMxhQ.f['4']++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['15']++;if(src!==SRC_POPSTATE){__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['5'][0]++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['16']++;win.history[src===SRC_REPLACE?(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['6'][0]++,'replaceState'):(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['6'][1]++,'pushState')](newState,(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['7'][0]++,options.title)||(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['7'][1]++,Y.config.doc.title)||(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['7'][2]++,''),(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['8'][0]++,options.url)||(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['8'][1]++,document.URL));}else{__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['5'][1]++;}__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['17']++;HistoryHTML5.superclass._storeState.apply(this,arguments);},_onPopState:function(e){__cov_NFPIa1bKbyM4xoYxYAMxhQ.f['5']++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['18']++;this._resolveChanges(SRC_POPSTATE,(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['9'][0]++,e._event.state)||(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['9'][1]++,null));}},{NAME:'historyhtml5',SRC_POPSTATE:SRC_POPSTATE});__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['19']++;if(!Y.Node.DOM_EVENTS.popstate){__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['10'][0]++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['20']++;Y.Node.DOM_EVENTS.popstate=1;}else{__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['10'][1]++;}__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['21']++;Y.HistoryHTML5=HistoryHTML5;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['22']++;if((__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['12'][0]++,useHistoryHTML5===true)||(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['12'][1]++,useHistoryHTML5!==false)&&(__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['12'][2]++,HistoryBase.html5)){__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['11'][0]++;__cov_NFPIa1bKbyM4xoYxYAMxhQ.s['23']++;Y.History=HistoryHTML5;}else{__cov_NFPIa1bKbyM4xoYxYAMxhQ.b['11'][1]++;}},'@VERSION@',{'optional':['json'],'requires':['event-base','history-base','node-base']});
