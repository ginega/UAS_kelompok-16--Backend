(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Form edit dan tambah"],{"06cb":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mt-4"},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("span",{staticClass:"display-1 font-weight-bold"},[t._v(" Tambah Camera ")])]),i("v-col",{staticClass:"formBox rounded-lg text-center pa-4",attrs:{cols:"5"}},[i("v-text-field",{attrs:{label:"Nama Camera",dense:"",outlined:"","hide-details":""},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}}),i("v-textarea",{staticClass:"mt-4",attrs:{label:"Spesifikasi",dense:"",rows:"3",outlined:"","hide-details":""},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description",e)},expression:"item.description"}}),i("v-text-field",{staticClass:"mt-4",attrs:{label:"Harga Sewa",dense:"",outlined:"","hide-details":""},model:{value:t.item.cost,callback:function(e){t.$set(t.item,"cost",e)},expression:"item.cost"}}),i("v-file-input",{staticClass:"mt-4",attrs:{label:"Gambar",dense:"",outlined:"","hide-details":""},model:{value:t.item.url,callback:function(e){t.$set(t.item,"url",e)},expression:"item.url"}}),i("v-btn",{staticClass:"mt-4 rounded-xl",attrs:{color:"primary",depressed:"",block:""},on:{click:t.handleCreate}},[t._v(" Submit ")])],1)],1)],1)},a=[],l=i("23de"),n={name:"Create",data(){return{item:new l["a"]("","","",""),submitted:!1,successful:!1,message:""}},mounted(){this.$store.state.auth.user?this.$router.push({path:"/"}):this.$store.state.adminAuth.admin||this.$router.push({path:"/admin/login"})},methods:{handleCreate(){console.log("gud lak!"),this.item.url="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png",this.message="",this.submitted=!0,this.$store.dispatch("adminAuth/addItem",this.item).then(t=>{this.$router.push("/admin/data-camera"),this.successful=!0,console.log(t)},t=>{this.message=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),this.successful=!1})}}},o=n,r=(i("b4ae"),i("2877")),c=i("6544"),h=i.n(c),u=i("8336"),p=i("62ad"),d=i("a523"),m=i("23a7"),g=i("0fd9"),f=i("8654"),v=i("a844"),b=Object(r["a"])(o,s,a,!1,null,null,null);e["default"]=b.exports;h()(b,{VBtn:u["a"],VCol:p["a"],VContainer:d["a"],VFileInput:m["a"],VRow:g["a"],VTextField:f["a"],VTextarea:v["a"]})},1681:function(t,e,i){},"23a7":function(t,e,i){"use strict";i("5803");var s=i("2677"),a=(i("8adc"),i("58df")),l=i("0789"),n=i("9d26"),o=i("a9ad"),r=i("4e82"),c=i("7560"),h=i("f2e7"),u=i("1c87"),p=i("af2b"),d=i("d9bd"),m=Object(a["a"])(o["a"],p["a"],u["a"],c["a"],Object(r["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...u["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(d["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l["a"],t)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,s),e)}}),g=i("80d2"),f=i("d9f7");e["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>Object(g["v"])(t).every(t=>null!=t&&"object"===typeof t)}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,{size:e=0})=>t+e,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(g["m"])(e,1024===this.base))},internalArrayValue(){return Object(g["v"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map(t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${Object(g["m"])(i,1024===this.base)})`:s}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(d["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];Object(g["f"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(m,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genControl(){const t=s["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(f["c"])(t.data.style,{display:"none"})),t},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=s["a"].options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},"23de":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));class s{constructor(t,e,i,s){this.name=t,this.description=e,this.cost=i,this.url=s}}},2677:function(t,e,i){"use strict";var s=i("8654");e["a"]=s["a"]},5803:function(t,e,i){},"8adc":function(t,e,i){},"8ca4":function(t,e,i){},a844:function(t,e,i){"use strict";i("1681");var s=i("8654"),a=i("58df");const l=Object(a["a"])(s["a"]);e["a"]=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b4ae:function(t,e,i){"use strict";i("8ca4")}}]);
//# sourceMappingURL=Form edit dan tambah.d94cd053.js.map