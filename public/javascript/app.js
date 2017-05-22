/**
 * Created by Seattle on 2017/5/22.
 */

new Vue({
    el:"#app",
    data:{
        userInfo:{},
        articalList:[]
    },
    mounted:function () {
        loadingStart();
        this.$nextTick(function () {
            this.init();
            loadingEnd();
        });
    },
    methods:{
        init:function () {
            var _this=this;
           axios.get("public/javascript/articalData.json").then(function (data) {
               if(data.data.status==1){
                    var result=data.data.result;
                   _this.userInfo=result.userInfo;
                   _this.articalList=result.articalList;
               }else{
                   alert(data.msg);
               }
           }).catch(function (err) {
               console.log(err);
           });
        }
    }
});

function loadingStart() {
    var _load=document.getElementById("loading");
    if(_load){
        _load.style.display='block';
    }else{
        _load=document.createElement("div");
        _load.id="loading";
        _load.className="loadmore";
        var wrp=document.createElement('div');
        wrp.className='tips_wrp';
        var icon=document.createElement('i');
        icon.className='icon_loading';
        var span=document.createElement('span');
        span.className='tips';
        span.innerHTML='正在加载';
        wrp.appendChild(icon)
        wrp.appendChild(span);
        _load.appendChild(wrp);
        document.getElementById("app").appendChild(_load);
    }
}
function loadingEnd() {
    var _load=document.getElementById("loading");
    _load.style.display='none';
}