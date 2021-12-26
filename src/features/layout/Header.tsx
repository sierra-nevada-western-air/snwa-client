import { Link } from 'react-router-dom';
import Icon from '../../common/bulma/elements/Icon';
import SitePaths from '../../router/sitePaths';

const Header: React.FC = () => {
	return (
		<header>
			<nav className="navbar is-tertiary" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<Icon options="is-large" iconName="fa-2x fa-plane" />
					</a>

					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<Link to={SitePaths.Home} className="navbar-item has-text-primary">
							Home
						</Link>

						<Link to={SitePaths.RouteMap} className="navbar-item has-text-primary">
							Route Map
						</Link>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<button className="button is-primary">
									<strong>Sign up</strong>
								</button>
								<button className="button is-light">Log in</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
