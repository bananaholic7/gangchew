import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';
import { Visibility, Favorite, Comment } from '@mui/icons-material';

const ConsumerListBoard = () => {
  // 가상의 데이터 배열을 생성합니다.
  const [data, setData] = useState([
    {
      id: 1,
      author: '작성자 1',
      date: '2023-10-05',
      category: '카테고리 1',
      views: 100,
      likes: 50,
      comments: 30,
    },
    // 나머지 데이터도 추가할 수 있습니다.
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        수요자 게시판
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>작성자</TableCell>
              <TableCell>작성일자</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell align="right">조회수</TableCell>
              <TableCell align="right">좋아요수</TableCell>
              <TableCell align="right">댓글수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell align="right">
                  <Visibility /> {item.views}
                </TableCell>
                <TableCell align="right">
                  <Favorite /> {item.likes}
                </TableCell>
                <TableCell align="right">
                  <Comment /> {item.comments}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination      
        rowsPerPageOptions={[5]} // 여기에서 페이지당 항목 수를 설정합니다.
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}      
      />
    </Container>
  );
};

export default ConsumerListBoard;