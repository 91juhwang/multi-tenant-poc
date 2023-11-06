const BRANDA_LIST = [
  {
    id: '1',
    content: 'spring'
  },
  {
    id: '2',
    content: 'winter-clothes'
  },
  {
    id: '3',
    content: 'summer-clothes'
  }
]

const BRANDB_LIST = [
  {
    id: '1',
    content: 'hat'
  },
  {
    id: '2',
    content: 'gloves'
  },
  {
    id: '3',
    content: 'glasses'
  }
]

export async function getAllBrandCollections() {
  return BRANDA_LIST
}

export async function getSingleBrandCollection(id:string) {
  const collection = BRANDB_LIST.find((collection) => collection.id === id)
  return collection 
}

export async function getAllBrandBCollections() {
  return BRANDB_LIST
}

export async function getSingleBrandBCollection(content:string) {

  const collection = BRANDB_LIST.find((collection) => collection.content === content)
  return collection 
}

// export const getServerSideProps = (async () => {
//   return { props: { repo } }
// })

export async function getServerSideProps({ props }: any) {
  console.log(props)
  const { id } = props;
  const collections:any = await getAllBrandCollections();

  return {
    props: { 
      id: id,
      content: collections.content,
    } 
  }
}

// export async function getServerSideProps() {
//   return {
//     props: [
//       {
//       data: {
//           id: 1,
//           content: 'spring'
//         }
//       },
//       {
//         data: {
//           id: 2,
//           content: 'winter-clothes'
//         }
//       }
//     ]
//   }
// }