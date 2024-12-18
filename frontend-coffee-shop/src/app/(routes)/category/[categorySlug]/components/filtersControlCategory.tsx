import FilterOrigin from './filterOrigin'

function FiltersControlCategory({ setFilterOrigin }: { setFilterOrigin: (value: string) => void }) {

  return (
    <div className='w-[150px] sm:mt-5'>
      <FilterOrigin onChange={setFilterOrigin}/>
    </div>
  )
}

export default FiltersControlCategory