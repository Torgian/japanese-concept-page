import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import TopPage from './pagesObject';
import Company from './company';
import Products from './products';
import DNA from './assets/dna.png';


const routes = [
  {
  	path: '/home',
  	exact: true,
  	sidebar: () => <div>トップ</div>,
  	main: () => <div className="topPageImageArea">{TopPage}</div>
  },
  {
  	path: '/company',
  	sidebar: () => <div>会社概要</div>,
  	main: () => <div style={{width: "100%"}}>{Company}</div>
  },
  {
  	path: '/products',
  	sidebar: () => <div>商品一覧</div>,
  	main: () => <div style={{width: "100%"}}>{Products}</div>
  },
  {
  	path: '/access',
  	sidebar: () => <div>アクセス</div>,
  	main: () => 
      <div style={{width: "100%"}}>
        <h3>アクセス</h3>
      </div>
  },
  {
  	path: '/recruitment',
  	sidebar: () => <div>採用情報</div>,
  	main: () => <h2>採用情報</h2>
  },
  {
  	path: '/inquiries',
  	sidebar: () => <div>お問合せ</div>,
  	main: () => <div style={{width: "100%"}}><h3>お問合せ</h3></div>
  }
];

const XYZ = (
  <div style={{padding:"40px 0px", margin:0, borderBottom: "solid gray 2px",}}>
    <h1> XYZ Inc. </h1>
  </div>
);

const Sidebar = () => (
  <div>
	<Router>

		<div style={{display: 'flex', height:"100vh"}}>
    
			<div style={{
        textAlign: "center",
				minWidth:'15em',
				background: "white",
				borderRight: "solid gray 2px",
			}}>
       {XYZ}  
    		<ul style={{listStyleType: 'none', padding:0, margin: "20% 0", overflow:"hidden"}}>
    			<li><NavLink to="/home">トップ</NavLink></li>
    			<li><NavLink to="/company">会社概要</NavLink></li>
    			<li><NavLink to="/products">商品一覧</NavLink></li>
    			<li><NavLink to="/access" >アクセス</NavLink></li>
    			<li><NavLink to="/recruitment" className="disabled">採用情報</NavLink></li>
    			<li><NavLink to="/inquiries">お問合せ</NavLink></li>
    		</ul>
        <img className="dnaSpin" id="dnaAsset" src={DNA} alt="" />
    		{routes.map((route, index) => (
    			<Route
    				key={index}
    				path={route.path}
    				exact={route.exact}
    			/>
    		))}
			</div> 
      <div style={{padding: '0px', display: 'flex', flex: 1, margin: 0,}}>
          {routes.map((route, index) => (
            // Renders components on right right side in the MAIN window
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}

      </div>
<div className="footer">
    <p>Copyright&copy; XYZ Inc. All Rights Reserved.</p>
  </div>
    </div>

  </Router>

  </div>
);

class SidebarArea extends React.Component {
 
  render(){
    return(
      <Sidebar />
    )
  }

}
export default SidebarArea