import React from "react"

const RepoDetaisl=({name, url, lan})=>{
	return(
		<div className="repoContiner">
			<div className ="Details">
				<h3 style={{padding:"10"}}>
					<a href={url} style={{ textDecoration: "none" }}>{name}</a>
				</h3>
				<div className="moreDetails">
					<span> {lan}</span>
					<span></span>
				</div>
			</div>
			<div className="star"> 
			</div>
		</div>
	)

}

export default RepoDetaisl;