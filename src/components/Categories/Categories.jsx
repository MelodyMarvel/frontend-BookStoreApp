import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./Categories.css";



const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
//   const filterOption = (input, option) =>
//     (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

function Categories() {

    const { updateSelectedCategory, setSelectedCategory} = useGlobalContext();

    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        updateSelectedCategory(category);
        // Navigate to the BookList page with the selected category as a route parameter
        navigate(`/booklist/${category}`);
      };
    return(
        <Select
        showSearch
        placeholder="Select a category"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          onSelect={handleCategorySelect} // Use the onSelect prop to handle category selection
           >
           {[
        {
          value: 'fiction',
          label: 'Fiction',
        },
        {
          value: 'young adult fiction',
          label: 'Young Adult Fiction',
        },
        {
          value: 'world war',
          label: 'World War',
        },
        {
          value: 'self help',
          label: 'Self Help',
        },
        {
          value: 'poetry',
          label: 'Poetry',
        },
      ].map((category) => (
        <Select.Option key={category.value} value={category.value}>
          {category.label}
        </Select.Option>
      ))}
    </Select>
    )
    

}

export default Categories