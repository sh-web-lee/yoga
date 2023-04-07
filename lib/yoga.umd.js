(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["yoga"] = factory();
	else
		root["yoga"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YButton": function() { return /* reexport */ packages_button; },
  "YSelector": function() { return /* reexport */ selector; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/selector/yoga-selector.vue?vue&type=template&id=6e09405e&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"y-select",style:(`height: ${_vm.height}px;`)},[_c('div',{class:['y-select-wrap', {'hover': !_vm.disabled, 'focus': _vm.showOptions, 'disabled': _vm.disabled}],style:(`width: ${_vm.width - 2}px; height: ${_vm.height - 2}px;`),attrs:{"tabindex":"0"},on:{"mouseenter":_vm.onInputEnter,"mouseleave":_vm.onInputLeave,"blur":function($event){_vm.activeBlur && !_vm.disabled ? _vm.onBlur() : e => e.preventDefault()},"click":function($event){_vm.disabled ? e => e.preventDefault() : _vm.openSelect()}}},[_c('div',{class:['y-select-input', {'placeholder': !_vm.selectedName}],style:(`line-height: ${_vm.height - 2}px;width: ${_vm.width - 37}px; height: ${_vm.height - 2}px;`),attrs:{"title":_vm.selectedName}},[_vm._v(_vm._s(_vm.selectedName || _vm.placeholder))]),_c('svg',{class:['triangle', {'rotate': _vm.showOptions, 'show': !_vm.showClose}],attrs:{"viewBox":"64 64 896 896","data-icon":"down","aria-hidden":"true","focusable":"false"}},[_c('path',{attrs:{"d":"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}})]),_c('svg',{class:['close', {'show': _vm.showClose}],attrs:{"focusable":"false","data-icon":"close-circle","aria-hidden":"true","viewBox":"64 64 896 896"},on:{"click":function($event){$event.stopPropagation();return _vm.onClear.apply(null, arguments)}}},[_c('path',{attrs:{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}})])]),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showOptions),expression:"showOptions"}],staticClass:"y-options-panel",style:(`top: ${_vm.height + 6}px; line-height: ${_vm.height - 12}px; max-height: ${ _vm.num * (_vm.height - 2) }px; width: ${_vm.width}px;`),on:{"mouseenter":_vm.onEnter,"mouseleave":_vm.onLeave}},_vm._l((_vm.options),function(option,index){return _c('p',{key:index,class:['y-option', {'option-selected': option[_vm.label]===_vm.selectedName, 'option-hover': !option.disabled&&option[_vm.value]===_vm.hoverValue, 'option-disabled': option.disabled }],attrs:{"title":option[_vm.label]},on:{"mouseenter":function($event){return _vm.onHover(option[_vm.value])},"click":function($event){option.disabled ? e => e.preventDefault() : _vm.onChange(option[_vm.value], option[_vm.label], index)}}},[_vm._v(" "+_vm._s(option[_vm.label])+" ")])}),0)])],1)
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/selector/yoga-selector.vue?vue&type=script&lang=js&

/* harmony default export */ var yoga_selectorvue_type_script_lang_js_ = ({
  name: 'y-selector',
  model: {
    prop: 'selectedValue',
    event: 'model'
  },
  props: {
    options: { // 选项数据
      type: Array,
      default: () => []
    },
    label: { // 选择器字典项的文本字段名
      type: String,
      default: 'label'
    },
    value: { // 选择器字典项的值字段名
      type: String,
      default: 'value'
    },
    placeholder: { // 选择框默认文字
      type: String,
      default: '请选择'
    },
    disabled: { // 是否禁用下拉
      type: Boolean,
      default: false
    },
    allowClear: { // 是否支持清除
      type: Boolean,
      default: false
    },
    width: { // 选择框宽度
      type: Number,
      default: 200
    },
    height: { // 选择框高度
      type: Number,
      default: 36
    },
    num: { // 下拉面板最多能展示的下拉项数，超过后滚动显示
      type: Number,
      default: 6
    },
    selectedValue: { // 当前选中的option条目（v-model）
      type: [Number, String],
      default: null
    }
  },
  data () {
    return {
      selectedName: null,
      hoverValue: null, // 鼠标悬浮项的value值
      activeBlur: true, // 是否激活blur事件
      showClose: false, // 清除按钮显隐
      showOptions: false // options面板
    }
  },
  watch: {
    options () {
      this.initSelector()
      // console.log('options')
    },
    selectedValue () {
      this.initSelector()
      // console.log('selectedValue')
    }
  },
  mounted () {
    this.initSelector()
  },
  methods: {
    initSelector () {
      if (this.selectedValue) {
        const target = this.options.find(option => option[this.value] === this.selectedValue)
        if (target) {
          this.selectedName = target[this.label]
          this.hoverValue = target[this.value]
        } else {
          this.selectedName = this.selectedValue
          this.hoverValue = null
        }
      } else {
        this.selectedName = null
        this.hoverValue = null
      }
    },
    onBlur () {
      if (this.showOptions) {
        this.showOptions = false
      }
    },
    onInputEnter () {
  // console.log('input enter')
      if (this.allowClear && this.selectedName) {
        this.showClose = true
      }
    },
    onInputLeave () {
      // console.log('input leave')
      if (this.allowClear && this.showClose) {
        this.showClose = false
      }
    },
    onHover (value) {
      this.hoverValue = value
    },
    onEnter () {
      this.activeBlur = false
    },
    onLeave () {
      this.hoverValue = null
      this.activeBlur = true
    },
    openSelect () {
      this.showOptions = !this.showOptions
      if (!this.hoverValue && this.selectedName) {
        const target = this.options.find(option => option[this.label] === this.selectedName)
        this.hoverValue = target ? target[this.value] : null
      }
    },
    onClear () {
      this.showClose = false
      this.selectedName = null
      this.hoverValue = null
    },
    onChange (value, label, index) { // 选中下拉项后的回调
      if (this.selectedValue !== value) {
        this.selectedName = label
        this.hoverValue = value
        this.$emit('model', value)
        this.$emit('change', value, label, index)
      }
      this.showOptions = false
    }
  }
});

;// CONCATENATED MODULE: ./packages/selector/yoga-selector.vue?vue&type=script&lang=js&
 /* harmony default export */ var selector_yoga_selectorvue_type_script_lang_js_ = (yoga_selectorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/selector/yoga-selector.vue?vue&type=style&index=0&id=6e09405e&prod&lang=less&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/selector/yoga-selector.vue?vue&type=style&index=0&id=6e09405e&prod&lang=less&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/selector/yoga-selector.vue



;


/* normalize component */

var component = normalizeComponent(
  selector_yoga_selectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6e09405e",
  null
  
)

/* harmony default export */ var yoga_selector = (component.exports);
;// CONCATENATED MODULE: ./packages/selector/index.js
// 引入组件


// 为组件提供install方法，供按需引入
yoga_selector.install = (Vue) => {
  Vue.component(yoga_selector.name, yoga_selector)
}

/* harmony default export */ var selector = (yoga_selector);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/button.vue?vue&type=template&id=1581b4c0&scoped=true&
var buttonvue_type_template_id_1581b4c0_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"y-btn",class:_vm.type ? 'y-btn-' + _vm.type : '',attrs:{"type":"button"}},[_c('span',[_vm._t("default")],2)])
}
var buttonvue_type_template_id_1581b4c0_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/button.vue?vue&type=script&lang=js&

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'y-button',
  props: {
    value: {
      type: String,
      default: 'button'
    },
    type: String
  },
  data () {
    return {
    }
  }
});

;// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/button.vue?vue&type=style&index=0&id=1581b4c0&prod&lang=less&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=style&index=0&id=1581b4c0&prod&lang=less&scoped=true&

;// CONCATENATED MODULE: ./packages/button/button.vue



;


/* normalize component */

var button_component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_1581b4c0_scoped_true_render,
  buttonvue_type_template_id_1581b4c0_scoped_true_staticRenderFns,
  false,
  null,
  "1581b4c0",
  null
  
)

/* harmony default export */ var button_button = (button_component.exports);
;// CONCATENATED MODULE: ./packages/button/index.js


button_button.install = (Vue) => {
  Vue.component(button_button.name, button_button)
}

/* harmony default export */ var packages_button = (button_button);
;// CONCATENATED MODULE: ./packages/index.js



const components = [
  selector,
  packages_button
]

/**
 * 定义 install 方法，接收 Vue 作为参数，如果使用 use 注册组件，则所有的组件都将被注册
 */
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历所有组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}



/* harmony default export */ var packages_0 = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=yoga.umd.js.map