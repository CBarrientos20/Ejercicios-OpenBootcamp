import {suma, multiplica} from './controller.js'
import chalk from 'chalk'
const sum= suma(1, 2)
const sum2= suma(4, 5)

const mul= multiplica(sum, sum2)
console.log(chalk.green(mul))