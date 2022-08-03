
function initValidation() {
	const forms = document.querySelectorAll('form:not(#wf-form-email-footer)');
	forms.forEach((form) => {
		const button = form.querySelector('button');
		button.click();
	});
}

document.querySelector('.w-commerce-commercecheckoutplaceorderbutton').addEventListener('click', initValidation);


function addButtons() {
	const forms = document.querySelectorAll('form:not(#wf-form-email-footer)');
	forms.forEach((form) => {
		form.insertAdjacentHTML('beforeend', '<button hidden type="submit" style="overflow:hidden; width:0px; height:0px">send</button>');
	});
}

addButtons();

