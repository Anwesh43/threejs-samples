#!/usr/bin/env node

import { writeFileSync, mkdirSync } from "fs";
import {join} from 'path'
import { chdir, cwd } from "process";
import { htmlString, mainJS } from "./generator";
import {exec} from 'child_process'
const generateProject = (projectName : string) => {
    const folderPath : string = join(cwd(), projectName)
    mkdirSync(folderPath)
    console.log(`Created ${projectName}`)
    chdir(folderPath)
    writeFileSync('index.html', Buffer.from(htmlString()))
    console.log(`Created index.html`)
    writeFileSync('main.js', Buffer.from(mainJS()))
    console.log(`Created main.js`)
}   

if (process.argv.length == 3) {
    generateProject(process.argv[2])
} else {
    console.log("please enter project name")
}
