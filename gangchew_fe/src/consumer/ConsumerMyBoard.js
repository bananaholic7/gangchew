import React, { useState } from 'react';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const ConsumerMyBoard = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    // 여기에서 게시글을 서버에 제출하는 로직을 구현합니다.
    // title, category, content 변수를 사용하여 게시글을 전송할 수 있습니다.
    // 이 부분은 실제 서버와의 통합이 필요합니다.
  };

  const handleCancel = () => {
    // 취소 버튼을 클릭한 경우 처리할 로직을 구현합니다.
    // 예를 들어, 입력된 내용을 초기화하거나 모달을 닫을 수 있습니다.
  };
  const DrawLine = () => {
    return <div> 
    {/* 다른 내용 */}
    <Divider orientation="vertical" />
    {/* 다른 내용 */}
    </div>

  }

  

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        수요자 게시판
      </Typography>
      <form>
        제목
        <DrawLine/>
        <TextField
          fullWidth
          label="제목"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          margin="normal"
        />
        
        <FormControl fullWidth variant="outlined" margin="normal">        
          <InputLabel>카테고리</InputLabel>
          <Select
            value={category}
            onChange={handleCategoryChange}
            label="카테고리"
          >
            <MenuItem value="aa">AA</MenuItem>
            <MenuItem value="bb">BB</MenuItem>
            <MenuItem value="cc">CC</MenuItem>
          </Select>
        </FormControl>
        내용
        <TextField
          fullWidth
          label="본문 내용"
          multiline
          rows={4}
          variant="outlined"
          value={content}
          onChange={handleContentChange}
          margin="normal"
        />
        
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
          style={{ marginRight: '8px' }}
        >
          등록
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          취소
        </Button>
      </form>
    </Container>
  




  );
};

export default ConsumerMyBoard;