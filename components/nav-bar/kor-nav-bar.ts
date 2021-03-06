import { LitElement, css, html, customElement } from 'lit-element';
import { sharedStyles } from '../../shared-styles';

/**
 * @slot - The main content area.
 * @slot functions - Shown on the right side.
 */

@customElement('kor-nav-bar')
export class korNavbar extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `,
    ];
  }

  render() {
    return html`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `;
  }
}
