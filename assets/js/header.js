class Header extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  // write element functionality in here
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<link href="./dist/output.css" rel="stylesheet" />
<link href="../../dist/output.css" rel="stylesheet" />


<nav class="bg-black">
<div class="container mx-auto p-4">
	<div class="flex justify-between items-center">
		<a href="./" class="h-8">
			<img src="./assets/logo-white.svg" class="h-full" />
		</a>

		<ul class="inline-flex text-white">
			<li class="mr-3">Prestations</li>
			<li class="mr-3">
				<a href="./src/pages/skills.html">Expertise</a>
			</li>
			<li class="mr-3">
				<a href="./src/pages/contact.html">Contact</a>
			</li>
		</ul>
	</div>
</div>
</nav>`;

customElements.define('header-component', Header);
