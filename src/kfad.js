(function($) {

	function mountInput(name, value, type, className, placeholder){
		return "<input name='" + name + "'  value='" + value + "' type='" + type + "' class='" + className + "' placeholder='" + placeholder + "' />";
	}

	function mountDivFormGroup(inside){
		return "<div class='form-group'><div class='cols-sm-10'><div class='input-group'>" + inside + "</div></div></div>";
	}

	$.fn.dynaform = function(options){

		var html = "<div class='row main'><div class='main-form main-center'><form class='form-horizontal'>",
				id   = "#"+$(this).attr('id');

		html += mountInput('token', options['token'], 'hidden');
		html += mountInput('secret', options['secret'], 'hidden');

		html += mountDivFormGroup(mountInput('lead[name]', '', 'text', 'form-control', 'Name'));
		html += mountDivFormGroup(mountInput('lead[email]', '', 'text', 'form-control', 'E-mail'));

		$.each(options['fields'], function(id, value){
			console.log(value);
			var select = "<select class='form-control' name='lead[" + id + "]'>";
			$.each(value, function(idx, valueF){
				console.log(valueF);
				select += "<option>" + valueF + "</option>";
			});
			select += "</select>";
			html += mountDivFormGroup(select);
		});

		html += mountDivFormGroup(mountInput('send', 'Enviar', 'submit', 'form-control btn btn-primary'));

		html += '</form></div></div>';

		$(id).append(html);
		return true;
	}

})(jQuery);