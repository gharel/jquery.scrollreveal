(function ($) {
	const defaults = {}

	$.fn.scrollreveal = function (options) {
		if (this.length === 0) {
			return this
		}

		// support multiple elements
		if (this.length > 1) {
			this.each(function () {
				$(this).scrollreveal(options)
			})
			return this
		}

		const scrollreveal = {}

		// set a reference to our slider element
		const el = this

		// Return if slider is already initialized
		if ($(el).data('scrollreveal')) {
			return
		}

		function init() {
			// Return if slider is already initialized
			if ($(el).data('scrollreveal')) {
				return
			}
			// merge user-supplied options with the defaults
			scrollreveal.settings = $.extend({}, defaults, options)

			$(window).on('scroll.scrollreveal', () => {
				const elHeight = el.outerHeight()
				const top = el.offset().top
				const min = top - window.innerHeight
				const max = top + elHeight
				if ($(window).scrollTop() > min && $(window).scrollTop() < max) {
					if (!$(el).hasClass('shown')) {
						$(el).addClass('shown')
					}
				} else if ($(el).hasClass('shown')) {
					$(el).removeClass('shown')
				}
				if ($(window).scrollTop() > min + elHeight && $(window).scrollTop() < top) {
					if (!$(el).hasClass('entirely-shown')) {
						$(el).addClass('entirely-shown')
					}
				} else if ($(el).hasClass('entirely-shown')) {
					$(el).removeClass('entirely-shown')
				}
			}).trigger('scroll.scrollreveal')
		}

		init()

		$(el).data('scrollreveal', this)

		// returns the current jQuery object
		return this
	}
})(jQuery)
