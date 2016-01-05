ko.bindingHandlers.slider = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var params = valueAccessor();
        var valueObservable = params['value'];

        for (var property in params) {
            if (ko.isObservable(params[property]))
                params[property] = ko.unwrap(params[property]);
        }
		
        $(element).slider(params);

        $(element).on('change', function (ev) {
            valueObservable(ev.value.newValue);
        });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var modelValue = valueAccessor();
        var valueObservable;
        if (ko.isObservable(modelValue))
            valueObservable = modelValue;
        else
            valueObservable = modelValue['value'];

        $(element).slider('setValue', valueObservable());
    }
};