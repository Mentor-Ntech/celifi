import React, { SVGProps } from 'react';

interface StakingIconProps extends SVGProps<SVGSVGElement> {
	className?: string;
}

export function StakingIcon({ className, ...props }: StakingIconProps) {
	return (
		<svg
			{...props}
			className={className}
			width="19"
			height="19"
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.36719 4.81388C9.12885 4.81388 11.3672 4.09567 11.3672 3.20894C11.3672 2.32221 9.12885 1.604 6.36719 1.604C3.60552 1.604 1.36719 2.32221 1.36719 3.20894C1.36719 4.09567 3.60552 4.81388 6.36719 4.81388ZM12.6172 7.22129C11.1806 7.22129 9.80285 7.77083 8.78703 8.74903C7.7712 9.72723 7.20052 11.054 7.20052 12.4373C7.20052 13.8207 7.7712 15.1474 8.78703 16.1256C9.80285 17.1038 11.1806 17.6534 12.6172 17.6534C14.0538 17.6534 15.4315 17.1038 16.4473 16.1256C17.4632 15.1474 18.0339 13.8207 18.0339 12.4373C18.0339 11.054 17.4632 9.72723 16.4473 8.74903C15.4315 7.77083 14.0538 7.22129 12.6172 7.22129Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.6172 15.246C12.7047 15.246 12.7855 15.2059 12.948 15.1273L14.2514 14.4885C14.8289 14.206 15.1172 14.0656 15.1172 13.8417V11.0331M12.6172 15.246C12.5297 15.246 12.4489 15.2059 12.2864 15.1273L10.983 14.4885C10.4055 14.206 10.1172 14.0656 10.1172 13.8417V11.0331M12.6172 15.246V12.4374M15.1172 11.0331C15.1172 10.8092 14.8289 10.6687 14.2514 10.3863L12.948 9.7475C12.7855 9.66886 12.7047 9.62874 12.6172 9.62874C12.5297 9.62874 12.4489 9.66886 12.2864 9.7475L10.983 10.3863C10.4055 10.6679 10.1172 10.8092 10.1172 11.0331M15.1172 11.0331C15.1172 11.2569 14.8289 11.3974 14.2514 11.6798L12.948 12.3186C12.7855 12.3973 12.7047 12.4374 12.6172 12.4374M10.1172 11.0331C10.1172 11.2569 10.4055 11.3974 10.983 11.6798L12.2864 12.3186C12.4489 12.3973 12.5297 12.4374 12.6172 12.4374M1.36719 3.20898V9.66324C1.36719 10.2282 2.34885 10.9392 4.80885 11.2337M1.45635 6.85861C2.46052 7.71084 4.25052 8.07195 6.16219 8.07195M11.3572 3.30608V4.92306"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
