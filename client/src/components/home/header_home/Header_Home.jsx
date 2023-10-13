import s from "./Header_Home.module.css";
import { NavLink } from "react-router-dom";
export const Header_Home = () => {
	return (
		<header className={s.header}>
			<div className={s.header__content}>
				<div className={s.logo}>
					<img
						src="./../../../../src/images/Logo.png"
						alt=""
						className={s.header__logo}
					/>
					<h2 className={s.header__h2}>Beautyness</h2>
					<img
						src="./../../../../src/images/Vector.png"
						alt=""
						className={s.telephone__logo}
					/>
					<p className={s.telephone__text}>Call Us - (+22) 123 456 7890</p>
				</div>
				<div className={s.menu__item}>
					<NavLink to="./">
						<p>Home</p>
					</NavLink>
					<NavLink>
						<p>Pages</p>
					</NavLink>
					<NavLink>
						<p>About</p>
					</NavLink>
					<NavLink>
						<p>Services</p>
					</NavLink>
					<NavLink>
						<p>Contact</p>
					</NavLink>
					<a href="https://vk.com/unknownpage872">
						<img src="./../../../../src/images/icons8-vk-20.png" alt="" />
					</a>
					<a href="https://github.com/VladAnohin">
						<img src="./../../../../src/images/icons8-github-20.png" alt="" />
					</a>
					<button>
						<img
							src="./../../../../src/images/Icon.png"
							alt=""
							className={s.button__icon}
						/>
						<p>Reservation</p>
					</button>
				</div>
			</div>
		</header>
	);
};
