(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{337:function(t,e,o){},381:function(t,e,o){"use strict";o(337)},411:function(t,e,o){"use strict";o.r(e);var n=o(310),i={components:{GridLayout:n.GridLayout,GridItem:n.GridItem},data:function(){return{layout:[{x:0,y:0,w:2,h:2,i:"0"},{x:2,y:0,w:2,h:4,i:"1"}],layout2:[{x:0,y:0,w:2,h:2,i:"0"},{x:2,y:0,w:2,h:4,i:"1"},{x:4,y:0,w:2,h:2,i:"2"}],draggable:!0,resizable:!0,index:0,eventLog:[]}},watch:{eventLog:function(){var t=this.$refs.eventsDiv;t.scrollTop=t.scrollHeight}},methods:{moveEvent:function(t,e,o){var n="MOVE i="+t+", X="+e+", Y="+o;this.eventLog.push(n),console.log(n)},movedEvent:function(t,e,o){var n="MOVED i="+t+", X="+e+", Y="+o;this.eventLog.push(n),console.log(n)},resizeEvent:function(t,e,o,n,i){var a="RESIZE i="+t+", H="+e+", W="+o+", H(px)="+n+", W(px)="+i;this.eventLog.push(a),console.log(a)},resizedEvent:function(t,e,o,n,i){var a="RESIZED i="+t+", X="+e+", Y="+o+", H(px)="+n+", W(px)="+i;this.eventLog.push(a),console.log(a)},containerResizedEvent:function(t,e,o,n,i){var a="CONTAINER RESIZED i="+t+", H="+e+", W="+o+", H(px)="+n+", W(px)="+i;this.eventLog.push(a),console.log(a)},layoutCreatedEvent:function(t){this.eventLog.push("Created layout"),console.log("Created layout: ",t)},layoutBeforeMountEvent:function(t){this.eventLog.push("beforeMount layout"),console.log("beforeMount layout: ",t)},layoutMountedEvent:function(t){this.eventLog.push("Mounted layout"),console.log("Mounted layout: ",t)},layoutReadyEvent:function(t){this.eventLog.push("Ready layout"),console.log("Ready layout: ",t)},layoutUpdatedEvent:function(t){this.eventLog.push("Updated layout"),console.log("Updated layout: ",t)}}},a=(o(381),o(26)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticStyle:{"margin-top":"10px"}},[o("h4",[t._v("Grid #1")]),t._v(" "),o("grid-layout",{attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,"use-css-transforms":!0}},t._l(t.layout,(function(e){return o("grid-item",{attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[o("span",{staticClass:"text"},[t._v(t._s(e.i))])])})),1)],1),t._v(" "),o("div",{staticStyle:{"margin-top":"10px"}},[o("h4",[t._v("Grid #2")]),t._v(" "),o("grid-layout",{attrs:{layout:t.layout2,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,"use-css-transforms":!0}},t._l(t.layout2,(function(e){return o("grid-item",{attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[o("span",{staticClass:"text"},[t._v(t._s(e.i))])])})),1)],1)])}),[],!1,null,"4318aa0c",null);e.default=s.exports}}]);