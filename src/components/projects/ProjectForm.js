import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || [])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }
  function handleCategory(e) {
    setProject({
      ...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input handleOnChange={handleChange} type='text' text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" value={project.name ? project.name : ''} />
      <Input handleOnChange={handleChange} type='number' text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" value={project.budget ? project.budget : ''} />
      <Select handleOnChange={handleCategory} type='category_id' text='Selecione a categoria' options={categories} value={project.category ? project.category.id : ''} />
      <Submit text={btnText} />
    </form>
  )
}

export default ProjectForm