import _ from 'lodash';



const siswaBanyak = [
  {nama: "rama" ,
    email: "ekajbe@jhsv"
  },
  {nama: "jdaadda" ,
    email: "ajdhvahd@jhsv"
  },
  {nama: "ryur" ,
    email: "adka@jhsv"
  },
]

const siswa = _.find(siswaBanyak, {nama: "rama"})

console.log(siswa)