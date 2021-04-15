import { useLayoutEffect } from 'react';

// Custom hook for changing the document title
const useDocumentTitle = (title) => {
	useLayoutEffect(() => {
		if (title) {
			document.title = title;
		} else {
			document.title = 'Green Tangerin - Store';
		}
	}, [title]);
};

export default useDocumentTitle;
