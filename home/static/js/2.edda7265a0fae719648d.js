webpackJsonp([2],{"8vb/":function(t,e){},"9xWS":function(t,e){},Abo2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{},[e("h1",[this._v("记事本 "),e("a",{staticClass:"t-btn",on:{click:this.showTools}},[e("span")])])])},staticRenderFns:[]};var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-add"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"n-input",attrs:{type:"text",placeholder:"待办事项"},domProps:{value:t.content},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.submit(e)},input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("button",{staticClass:"add-btn",on:{click:t.submit}},[t._v("添加+")])])},staticRenderFns:[]};var o={data:function(){return{}},props:["isShow"],methods:{showDialog:function(){this.$emit("cleardialog")},backupData:function(){console.log(localStorage.getItem("lx_notepad"))},openTable:function(){this.$emit("opentable")}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-tools",class:{"show-event-tools":t.isShow}},[n("ul",{staticClass:"tools-sidebar"},[n("li",[n("button",{staticClass:"tools-btn",on:{click:t.backupData}},[t._v("打印数据")])]),t._v(" "),n("li",[n("button",{staticClass:"tools-btn",on:{click:t.openTable}},[t._v("编辑数据")])]),t._v(" "),n("li",[n("button",{staticClass:"tools-btn",on:{click:t.showDialog}},[t._v("清空数据")])])])])},staticRenderFns:[]};var c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog",class:{"dialog-show":t.isShow}},[n("div",{staticClass:"dialog-wrapper"},[t._m(0),t._v(" "),n("div",{staticClass:"dialog-content"},[t._v("\n            "+t._s(t.msg)+"\n        ")]),t._v(" "),n("div",{staticClass:"dialog-btns"},[n("button",{staticClass:"cancel-btn",attrs:{type:"button"},on:{click:t.cancelEvent}},[t._v("取消")]),t._v(" "),n("button",{staticClass:"sure-btn",attrs:{type:"button"},on:{click:t.sureEvent}},[t._v("确定")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dialog-header"},[e("span",{staticClass:"dialog-header-title"},[this._v("提示")])])}]};var l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"event-all",class:{"event-all-show":t.isShow}},[n("div",{staticClass:"table-box"},[n("div",{staticClass:"edit-input",class:{"edit-input-show":t.is_edit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.info.content,expression:"info.content"}],ref:"content",attrs:{type:"text"},domProps:{value:t.info.content},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.editData(e)},input:function(e){e.target.composing||t.$set(t.info,"content",e.target.value)}}}),t._v(" "),n("button",{on:{click:t.editData}},[t._v("确定")])]),t._v(" "),n("div",{staticClass:"screen-box"},[n("div",{staticClass:"div-select",class:{active:t.active}},[n("div",{staticClass:"div-value",on:{click:function(e){t.active=!t.active}}},[t._v(t._s(t.getTypeName))]),t._v(" "),n("div",{staticClass:"div-select-body"},[n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(0)}}},[t._v("筛选类型")]),t._v(" "),n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(1)}}},[t._v("未完成")]),t._v(" "),n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(2)}}},[t._v("已完成")]),t._v(" "),n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(3)}}},[t._v("已取消")])])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.screen_title,expression:"screen_title"}],staticClass:"div-search",attrs:{type:"text",placeholder:"筛选关键词"},domProps:{value:t.screen_title},on:{input:function(e){e.target.composing||(t.screen_title=e.target.value)}}})]),t._v(" "),n("table",{staticClass:"event-table"},[t._m(0),t._v(" "),n("tbody",t._l(t.notapad,function(e,s){return n("tr",{key:s},[n("td",{attrs:{align:"center"}},[t._v(t._s(s+1))]),t._v(" "),n("td",[t._v(t._s(e.content))]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v(t._s(t.getType(e.type)))]),t._v(" "),n("td",{staticStyle:{"font-size":"0"},attrs:{align:"center"}},[n("button",{on:{click:function(e){t.showInput(s)}}},[t._v("编辑")]),t._v(" "),n("button",{staticClass:"del-btn",on:{click:function(n){t.showDialog(s,e.id)}}},[t._v("删除")])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("#")]),this._v(" "),e("th",[this._v("所有事项")]),this._v(" "),e("th",{attrs:{width:""}},[this._v("类型")]),this._v(" "),e("th",{attrs:{width:""}},[this._v("操作")])])])}]};var r={data:function(){return{collapse:[{show:!0,contentHeight:"auto"},{show:!0,contentHeight:"auto"},{show:!0,contentHeight:"auto"}],tools:!1,dialog:!1,table:!1,dialog_type:"",tips:"",del_info:{index:0,id:0}}},computed:{getToDo:function(){return this.$store.state.event.filter(function(t){if(1===t.type)return t})},getDone:function(){return this.$store.state.event.filter(function(t){if(2===t.type)return t})},getCancel:function(){return this.$store.state.event.filter(function(t){if(3===t.type)return t})}},components:{nHeader:n("VU/8")({methods:{showTools:function(){this.$emit("tools")}}},s,!1,function(t){n("8vb/")},"data-v-48c593d3",null).exports,addEvent:n("VU/8")({name:"hello",data:function(){return{content:""}},methods:{submit:function(){var t={id:0,type:1,content:"",time:""};this.content=this.content.trim(),this.content&&(t.content=this.content,this.$store.dispatch("addevent",t),this.content="")}}},i,!1,function(t){n("u1tI")},"data-v-303548c2",null).exports,nTools:n("VU/8")(o,a,!1,function(t){n("9xWS")},"data-v-7f65982c",null).exports,nDialog:n("VU/8")({data:function(){return{}},props:["isShow","msg"],methods:{cancelEvent:function(){this.$emit("cancel")},sureEvent:function(){this.$emit("sure")}}},c,!1,function(t){n("Rxi5")},"data-v-5a266d74",null).exports,nTable:n("VU/8")({data:function(){return{is_edit:!1,active:!1,screen_type:0,screen_title:"",info:{content:"",id:0,index:0}}},props:["isShow"],computed:{notapad:function(){var t=this;return t.$store.state.event.filter(function(e){if(0!==t.screen_type&&""===t.screen_title){if(e.type===t.screen_type)return e}else if(0!==t.screen_type&&""!==t.screen_title){if(e.type===t.screen_type&&-1!==e.content.indexOf(t.screen_title))return e}else{if(0!==t.screen_type||""===t.screen_title)return e;if(-1!==e.content.indexOf(t.screen_title))return e}})},getTypeName:function(){return this.getType(this.screen_type)||"筛选类型"}},methods:{doSelect:function(t){this.screen_type=t,this.active=!1},getType:function(t){var e="";switch(t){case 1:e="未完成";break;case 2:e="已完成";break;case 3:e="已取消"}return e},showDialog:function(t,e){this.$emit("deldialog",t,e)},showInput:function(t){this.is_edit=!0,this.info={index:t,content:this.notapad[t].content,id:this.notapad[t].id},this.$refs.content.focus()},editData:function(){this.info.content=this.info.content.trim(),this.info.content&&(this.$store.dispatch("editevent",this.info),this.is_edit=!1)},closeTable:function(){this.$emit("close")}}},l,!1,function(t){n("WE4Q")},"data-v-427394a4",null).exports},methods:{moveToDone:function(t,e){e.target.checked&&(this.$store.dispatch("eventdone",t),e.target.checked=!1)},moveToDo:function(t,e){e&&!e.target.checked?(this.$store.dispatch("eventtodo",t),e.target.checked=!0):t&&this.$store.dispatch("eventtodo",t)},moveCancel:function(t){this.$store.dispatch("eventcancel",t)},changeCollapse:function(t,e){this.collapse[t].show?(this.closeCollapse(t,e),this.collapse[t].show=!1):(this.openCollapse(t,e),this.collapse[t].show=!0)},closeCollapse:function(t,e){var n=e.currentTarget.nextElementSibling;n.style.height=n.offsetHeight+"px",this.collapse[t].contentHeight=n.offsetHeight,setTimeout(function(){n.style.height="0px",setTimeout(function(){n.style.display="none"},300)},10)},openCollapse:function(t,e){var n=e.currentTarget.nextElementSibling,s=this;n.style.display="block",setTimeout(function(){n.style.height=s.collapse[t].contentHeight+"px",setTimeout(function(){n.style.height="auto"},300)},10)},clearData:function(){this.dialog=!0,this.dialog_type="clear",this.tips="清空后无法恢复，确认清空吗？"},delData:function(t,e){this.dialog=!0,this.dialog_type="del",this.tips="删除后无法恢复，确认删除吗？",this.del_info={index:t,id:e}},sureDialog:function(){switch(this.dialog_type){case"clear":this.$store.dispatch("clearevent");break;case"del":this.$store.dispatch("delevent",this.del_info)}this.dialog=!1},changePages:function(){this.table?this.table=!this.table:this.tools=!this.tools}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("n-header",{on:{tools:t.changePages}}),t._v(" "),n("section",{staticClass:"container",class:{hide:t.table}},[n("add-event"),t._v(" "),n("div",{staticClass:"event-content"},[n("div",{staticClass:"event-tab",on:{click:function(e){t.changeCollapse(0,e)}}},[t._v("未完成\n                "),n("span",{class:{"close-span":!t.collapse[0].show}})]),t._v(" "),n("ul",{staticClass:"event-box",style:{height:"auto",display:"block"}},t._l(t.getToDo,function(e){return n("li",{key:e,staticClass:"event-list"},[n("input",{attrs:{type:"checkbox"},on:{click:function(n){t.moveToDone(e.id,n)}}}),t._v(" "),n("div",[t._v(t._s(e.content))]),t._v(" "),n("button",{staticClass:"cancel-btn",on:{click:function(n){t.moveCancel(e.id)}}},[t._v("取消")])])})),t._v(" "),n("div",{staticClass:"event-tab",on:{click:function(e){t.changeCollapse(1,e)}}},[t._v("已完成\n                "),n("span",{class:{"close-span":!t.collapse[1].show}})]),t._v(" "),n("ul",{staticClass:"event-box"},t._l(t.getDone,function(e){return n("li",{key:e,staticClass:"event-list"},[n("input",{attrs:{type:"checkbox",checked:""},on:{click:function(n){t.moveToDo(e.id,n)}}}),t._v(" "),n("div",[t._v(t._s(e.content))]),t._v(" "),n("span",{staticClass:"event-time"},[t._v(t._s(e.time))])])})),t._v(" "),n("div",{staticClass:"event-tab",on:{click:function(e){t.changeCollapse(2,e)}}},[t._v("已取消\n                "),n("span",{class:{"close-span":!t.collapse[2].show}})]),t._v(" "),n("ul",{staticClass:"event-box",class:{"event-box-hide":!1}},t._l(t.getCancel,function(e){return n("li",{key:e,staticClass:"event-list"},[n("div",{staticClass:"event-delete"},[t._v(t._s(e.content))]),t._v(" "),n("button",{staticClass:"cancel-btn",on:{click:function(n){t.moveToDo(e.id)}}},[t._v("恢复")])])}))]),t._v(" "),n("n-tools",{attrs:{"is-show":t.tools},on:{cleardialog:t.clearData,opentable:function(e){t.table=!0,t.tools=!1}}})],1),t._v(" "),n("n-dialog",{attrs:{"is-show":t.dialog,msg:t.tips},on:{cancel:function(e){t.dialog=!1},sure:t.sureDialog}}),t._v(" "),n("n-table",{attrs:{"is-show":t.table},on:{deldialog:t.delData,close:function(e){t.table=!1}}})],1)},staticRenderFns:[]};var u=n("VU/8")(r,d,!1,function(t){n("KWds")},"data-v-21ae5224",null);e.default=u.exports},KWds:function(t,e){},Rxi5:function(t,e){},WE4Q:function(t,e){},u1tI:function(t,e){}});