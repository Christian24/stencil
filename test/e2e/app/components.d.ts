/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {
  interface HTMLConditionalBasicElement extends HTMLStencilElement {

  }
  var HTMLConditionalBasicElement: {
    prototype: HTMLConditionalBasicElement;
    new (): HTMLConditionalBasicElement;
  };
  interface HTMLElementTagNameMap {
    'conditional-basic': HTMLConditionalBasicElement;
  }
  interface ElementTagNameMap {
    'conditional-basic': HTMLConditionalBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'conditional-basic': JSXElements.ConditionalBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface ConditionalBasicAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLSlotBasicElement extends HTMLStencilElement {

  }
  var HTMLSlotBasicElement: {
    prototype: HTMLSlotBasicElement;
    new (): HTMLSlotBasicElement;
  };
  interface HTMLElementTagNameMap {
    'slot-basic': HTMLSlotBasicElement;
  }
  interface ElementTagNameMap {
    'slot-basic': HTMLSlotBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-basic': JSXElements.SlotBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotBasicAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLSlotBasicContentElement extends HTMLStencilElement {

  }
  var HTMLSlotBasicContentElement: {
    prototype: HTMLSlotBasicContentElement;
    new (): HTMLSlotBasicContentElement;
  };
  interface HTMLElementTagNameMap {
    'slot-basic-content': HTMLSlotBasicContentElement;
  }
  interface ElementTagNameMap {
    'slot-basic-content': HTMLSlotBasicContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-basic-content': JSXElements.SlotBasicContentAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotBasicContentAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLSlotLightDomContentElement extends HTMLStencilElement {

  }
  var HTMLSlotLightDomContentElement: {
    prototype: HTMLSlotLightDomContentElement;
    new (): HTMLSlotLightDomContentElement;
  };
  interface HTMLElementTagNameMap {
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
  }
  interface ElementTagNameMap {
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-light-dom-content': JSXElements.SlotLightDomContentAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotLightDomContentAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }