import departmentExhibitionsData from "@/../contents/department_exhibition.json";

const exhibitionsByDepartment = departmentExhibitionsData.reduce((acc, exhibition) => {
  if (!acc[exhibition.department]) {
    acc[exhibition.department] = [];
  }
  acc[exhibition.department].push(exhibition);
  return acc;
}, {} as Record<string, typeof departmentExhibitionsData[number][]>);

export default exhibitionsByDepartment;
