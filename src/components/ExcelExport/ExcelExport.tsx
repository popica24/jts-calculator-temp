import { useState } from 'react';
import { saveAs } from 'file-saver';
// @ts-ignore
import * as XLSX from 'xlsx/xlsx.mjs';
import { Button, Input, Title } from '@mantine/core';

const ExcelExport = ({ data }: { data: any }) => {
  const [fileName, setFileName] = useState('');
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <>
      <Title mt={'xl'}>Introduceti numele clientului destinat</Title>
      <Input onChange={(e) => setFileName(e.target.value)} />
      <Button onClick={exportToExcel}>Descarca ca fisier Excel</Button>
    </>
  );
};

export default ExcelExport;
