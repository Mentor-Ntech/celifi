import React, { SVGProps } from 'react';

interface CustomSVGProps extends SVGProps<SVGSVGElement> {
	className?: string;
}

export function SwapIcon({ className, ...props }: CustomSVGProps) {
	return (
		<svg
			{...props}
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M 3.00488 3.00275 H 21.0049 C 21.5572 3.00275 22.0049 3.45046 22.0049 4.00275 V 20.0027 C 22.0049 20.555 21.5572 21.0027 21.0049 21.0027 H 3.00488 C 2.4526 21.0027 2.00488 20.555 2.00488 20.0027 V 4.00275 C 2.00488 3.45046 2.4526 3.00275 3.00488 3.00275 Z M 15.0049 7.00275 V 9.00275 H 11.0049 V 11.0027 H 15.0049 V 13.0027 L 18.5049 10.0027 L 15.0049 7.00275 Z M 9.00488 17.0027 V 15.0027 H 13.0049 V 13.0027 H 9.00488 V 11.0027 L 5.50488 14.0027 L 9.00488 17.0027 Z" />
		</svg>
	);
}
