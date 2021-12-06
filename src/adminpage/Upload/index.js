import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from './progress'
import "./upload.css";


function FileUploadPage() {

  const token = localStorage.getItem("token");

  useEffect(() => {
    if(!token) {
      window.location.href="/admin"
    }
  },[token])

  const [selectedFile, setSelectedFile] = useState([]);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [percentImg, setPercentImg] = useState(0)
  
  const [selectedFile1, setSelectedFile1] = useState([]);
  const [isFilePicked1, setIsFilePicked1] = useState(false);
  const [percent1, setPercent1] = useState(0)
  
  const [selectedFile2, setSelectedFile2] = useState([]);
  const [isFilePicked2, setIsFilePicked2] = useState(false);
  const [percent2, setPercent2] = useState(0)
  
  const [selectedFile3, setSelectedFile3] = useState([]);
  const [isFilePicked3, setIsFilePicked3] = useState(false);
  const [percent3, setPercent3] = useState(0)
  
  const [selectedFile4, setSelectedFile4] = useState([]);
  const [isFilePicked4, setIsFilePicked4] = useState(false);
  const [percent4, setPercent4] = useState(0)
  
  /////main
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  
  const handleSubmission = async () => {
    let data = new FormData();
    data.append("file", selectedFile);
    data.append("userId", 1);
    data.append("docType", "jpg");
    const config = { 
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`},
      onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            setPercentImg(percent)
          }
    };
    await axios.post("http://161.35.117.200:8087/api/admin/uploadFile", data , config)
   
  };

  ////// 1-si
  const changeHandler1 = (event) => {
    setSelectedFile1(event.target.files[0]);
    setIsFilePicked1(true);
  };
  const handleSubmission1 = async () => {
    let data = new FormData();
    data.append("file", selectedFile1);
    data.append("userId", 2);
    data.append("docType", "mp4");
    const config = { 
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`},
      onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            setPercent1(percent)
          }
    };
    await axios.post("http://161.35.117.200:8087/api/admin/uploadFile", data , config)
   
  };
 /////// 2
  const changeHandler2 = (event) => {
    setSelectedFile2(event.target.files[0]);
    setIsFilePicked2(true);
  };
  const handleSubmission2 = async () => {
    let data = new FormData();
    data.append("file", selectedFile2);
    data.append("userId", 3);
    data.append("docType", "mp4");
    const config = { 
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`},
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        setPercent2(percent)
      } 
    };
    await axios.post("http://161.35.117.200:8087/api/admin/uploadFile", data , config)
   
  };

  ////// 3-
  const changeHandler3 = (event) => {
    setSelectedFile3(event.target.files[0]);
    setIsFilePicked3(true);
  };
  const handleSubmission3 = async () => {
    let data = new FormData();
    data.append("file", selectedFile3);
    data.append("userId", 4);
    data.append("docType", "mp4");
    const config = { 
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`},
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        setPercent3(percent)
      } 
    };
    await axios.post("http://161.35.117.200:8087/api/admin/uploadFile", data , config)
   
  };

  ///// 4

  const changeHandler4 = (event) => {
    setSelectedFile4(event.target.files[0]);
    setIsFilePicked4(true);
  };
  const handleSubmission4 = async () => {
    let data = new FormData();
    data.append("file", selectedFile4);
    data.append("userId", 5);
    data.append("docType", "mp4");
    const config = { 
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`},
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        setPercent4(percent)
      } 
    };
    await axios.post("http://161.35.117.200:8087/api/admin/uploadFile", data , config)
   
  };

  // console.log("asosiy:"+percent1)
  return (
    <div className="upload-container">
          <div className="video-uploader">
            <div style={{position: 'absolute', right:15, top:"50%", transform: 'translateY(-50%)'}}>
              <Progress value={percentImg}/>
            </div>
            <input type="file" name="file" onChange={changeHandler} />
            {isFilePicked ? (
              <div>
                  
                <p>Имя файла: {selectedFile.name}</p>
        
                <p>
                   Последнее обновление:
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <span className="choose">Выберите файл, чтобы показать подробности Изображение-1</span>
            )}
            <div>
              
              <button onClick={handleSubmission} className="btn btn-primary" style={!isFilePicked ? {cursor:"not-allowed"}:null}>Загрузить</button>
            </div>
          </div>

          {/* 1-video */}
          <div className="video-uploader">
            <div style={{position: 'absolute', right:15, top:"50%", transform: 'translateY(-50%)'}}>
              <Progress value={percent1}/>
            </div>
            <input type="file" name="file" onChange={changeHandler1} />
            {isFilePicked1 ? (
              <div>
                  
                <p>Имя файла: {selectedFile1.name}</p>
        
                <p>
                  Последнее обновление:
                  {selectedFile1.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <span className="choose">Выберите файл, чтобы показать подробности видео-1</span>
            )}
            <div>
              
              <button onClick={handleSubmission1} className="btn btn-primary" style={!isFilePicked1 ? {cursor:"not-allowed"}:null}>Загрузить</button>
            </div>
          </div>

              {/* 2-video */}

          <div className="video-uploader">
            <div style={{position: 'absolute', right:15, top:"50%", transform: 'translateY(-50%)'}}>
              <Progress value={percent2}/>
            </div>
            <input type="file" name="file" onChange={changeHandler2} />
            {isFilePicked2 ? (
              <div>
                  
                <p>Имя файла: {selectedFile2.name}</p>
        
                <p>
                  Последнее обновление:
                  {selectedFile2.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <span className="choose">Выберите файл, чтобы показать подробности видео-2</span>
            )}
            <div>
              
              <button onClick={handleSubmission2} className="btn btn-primary" style={!isFilePicked2 ? {cursor:"not-allowed"}:null}>Загрузить</button>
            </div>
          </div>

              {/* 3-video */}

          <div className="video-uploader">
            <div style={{position: 'absolute', right:15, top:"50%", transform: 'translateY(-50%)'}}>
              <Progress value={percent3}/>
            </div>
            <input type="file" name="file" onChange={changeHandler3} />
            {isFilePicked3 ? (
              <div>
                  
                <p>Имя файла: {selectedFile3.name}</p>
        
                <p>
                  Последнее обновление:
                  {selectedFile3.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <span className="choose">Выберите файл, чтобы показать подробности видео-3</span>
            )}
            <div>
              
              <button onClick={handleSubmission3} className="btn btn-primary" style={!isFilePicked3 ? {cursor:"not-allowed"}:null}>Загрузить</button>
            </div>
          </div>

          {/* 4-video */}


          <div className="video-uploader">
            <div style={{position: 'absolute', right:15, top:"50%", transform: 'translateY(-50%)'}}>
              <Progress value={percent4}/>
            </div>
            <input type="file" name="file" onChange={changeHandler4} />
            {isFilePicked4 ? (
              <div>
                  
                <p>Имя файла: {selectedFile4.name}</p>
        
                <p>
                  Последнее обновление:
                  {selectedFile4.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <span className="choose">Выберите файл, чтобы показать подробности видео-4</span>
            )}
            <div>
              
              <button onClick={handleSubmission4} className="btn btn-primary" style={!isFilePicked4 ? {cursor:"not-allowed"}:null}>Загрузить</button>
            </div>
          </div>
    </div>
    
  );
}
export default FileUploadPage;
