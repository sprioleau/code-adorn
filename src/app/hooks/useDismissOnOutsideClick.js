import { useEffect } from "react";

const useDismissOnOutsideClick = (ref, triggerElement, callbackFunction) => {
	const handleClickOutside = (event) => {
		if (triggerElement && ref.current && !ref.current.contains(event.target)) {
			callbackFunction();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
};

export default useDismissOnOutsideClick;
