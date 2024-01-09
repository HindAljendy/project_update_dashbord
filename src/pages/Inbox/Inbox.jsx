import './Inbox.css'
import nomail from './../../images/Asset 1 1.svg'
import small_photo from './../../images/Rectangle 113.png'
import attach_small from './../../images/attachsquare_small.svg'
import attach from './../../images/attachsquare.svg'
import filter from './../../images/frame.svg'
import download from './../../images/inbox2 arrowcircledown2.svg'
import option from './../../images/ic_baseline-more-vert.svg'
import trash from './../../images/delete small.svg'
import gallery from './../../images/gallery_small.svg'
import { useState } from 'react'
import Topbar from '../../componnents/Topbar/Topbar'

const InboxComponnent = () => {

    const [activeItem , setActiveItem] = useState(null);
    const handleItemClick = (item)=>{
      setActiveItem(item);
    };

    return (
        <div className='HJ_container rh-inbox'>
            <Topbar title="Inbox" />
            <div className="border-b">
                <div className="toolbar">
                    <div>
                        <input type="checkbox" name="select" className='select_inbox' />  
                        <img src={filter} alt='filter'  className='filter_inbox' />
                        
                    </div>
                    <img src={trash} alt='delete'/>
                </div>


            </div>

            <div className='d-flex'>
                <div className='Myscroll'>
                    <div className="list">


                        <div className={activeItem === 'item1' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item1') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                        
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>

                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>

                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item2' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item2') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item3' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item3') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item4' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item4') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item5' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item5') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item6' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item6') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item7' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item7') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

              
                 <div className='container'>
                    <div className='content'>
                        <div className='d-flex content_inbox_space'>
                            <div className='lineheight'>
                                <p className='text-bold'>OLA Abd alrahman</p>
                                <p >abdaloosh@gmail.com</p>
                            </div>
                            <div className='ml-auto '>
                                <span>July 17, 2023 </span>
                                <img src={trash} alt='delete ' className='icon_content_trash'/>
                                <img src={option}  alt='option'  className='icon_content_option' />
                            </div>
                        </div>
                        <div>
                            <p className='text-bold mt-4'>Photos for the project</p>
                            <p className='mb-4'>Hi everyone! I have a sentence here that I really should
                             know how to say but I seem to be struggling with it the more I think about it. 
                             Hi everyone! I have a sentence here that I really should know how to say.</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='text-bold'><img src={attach}alt='' /> Attachments 6</span>
                            <span  className='download_content' >Download all <img src={download} alt='' /></span>
                        </div>
                        <div className='images_attachment'>
                            <img src={ small_photo} alt="link" className='mr-2 img_attach' />
                            <img src={ small_photo} alt="link" className='mr-2 img_attach img_attach_margin ' />
                            <img src={ small_photo} alt="link" className='mr-2 img_attach img_attach_margin_space' />
                            <img src={ small_photo} alt="link" className='mr-2 img_attach' />

                        </div>
                        

                    </div>


                    <h3 className='beforeAndAfter text-bold'>Reply</h3>
                    <div className='content'>
                        <div className=' d-flex'>
                            <p className='d-inline'>Start writing your <span className="color-blue"> response</span> or <span className='color-blue'>forward</span> message...</p>
                            <img src={option} alt='option' className='margin_option' />
                        </div>
                        <div className='d-flex mt-3 images_with_botton'>
                            <div>
                              <img src={attach_small} alt='attach' />
                              <img src={gallery} alt='gallery' className='gallery_margin' />
                            </div>
                            <button className='btn btn-primary ml-auto'>Send</button>
                        </div>
                    </div>

                </div> 


            </div>


        </div>
    )
}

export default InboxComponnent
