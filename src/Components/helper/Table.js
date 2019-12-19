    import '../../Styles/Download.css';
    import React, {useEffect, useState} from 'react';


    

    const Table=()=>{

        const [instaFollowers,SetInstaFollowers]=useState([])
        // useEffect(() => {
        //     // let instaFollowers= JSON.parse(localStorage.getItem("instaFollowers"))
        //     SetInstaFollowers(JSON.parse(localStorage.getItem("instaFollowers")).user.edge_followed_by)
        //     console.log("sdjashkjhdsa insta data from table",instaFollowers.edges)
           
        // }, [instaFollowers.length])


        let content =(
            <React.Fragment>
        <div className="row">
        <div className="col-lg-12">
            <div className="main-box clearfix">
                <div className="table-responsive">
                    <table className="table user-list">
                        <thead>
                            <tr>
                                <th><span>User</span></th>
                                <th><span>Created</span></th>
                                <th className="text-center"><span>Status</span></th>
                                <th><span>Email</span></th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2aS5hSBQcw1COcojdKhRfFUE4fxKgKxaC3cx5BsOpBniqE-_Zww" alt="" />
                                    <a href="#" className="user-link">Vasu Dev Arora</a>
                                    <span className="user-subhead">Super Admin</span>
                                </td>
                                <td>
                                    2013/08/08
                                </td>
                                <td className="text-center">
                                    <span className="label label-default">Inactive</span>
                                </td>
                                <td>
                                    <a href="#">vasudevarora1786@gmail.com</a>
                                </td>
                                <td >
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link danger">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://pbs.twimg.com/profile_images/773085621552230405/3be4Qpaf_400x400.jpg" alt="" />
                                    <a href="#" className="user-link">Deshna Sachan</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                    2013/08/08
                                </td>
                                <td className="text-center">
                                    <span className="label label-default">Inactive</span>
                                </td>
                                <td>
                                    <a href="#">mila@kunis.com</a>
                                </td>
                                <td >
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link danger">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://www.static-contents.youth4work.com/y4w/Images/UserThumbImage/160_160/20190529175614.png?v=20190529175614" alt="" />
                                    <a href="#" className="user-link">Neeti Mehra</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                    2013/08/08
                                </td>
                                <td className="text-center">
                                    <span className="label label-default">Inactive</span>
                                </td>
                                <td>
                                    <a href="#">mila@kunis.com</a>
                                </td>
                                <td >
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link danger">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                    <a href="#" className="user-link">Prateek Pandey</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                    2013/08/08
                                </td>
                                <td className="text-center">
                                    <span className="label label-default">Inactive</span>
                                </td>
                                <td>
                                    <a href="#">mila@kunis.com</a>
                                </td>
                                <td >
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link danger">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                    <a href="#" className="user-link">Smiley Chaudhary</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                    2013/08/08
                                </td>
                                <td className="text-center">
                                    <span className="label label-default">Inactive</span>
                                </td>
                                <td>
                                    <a href="#">mila@kunis.com</a>
                                </td>
                                <td >
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="table-link danger">
                                        <span className="fa-stack">
                                            <i className="fa fa-square fa-stack-2x"></i>
                                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>);

    return content;
    }

    export default Table;