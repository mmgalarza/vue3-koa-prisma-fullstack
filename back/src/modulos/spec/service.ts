import fs from "fs";
import path from "path";
import { SpecDto } from "./dto";

const openapiFolder = path.join(process.cwd(), "src/modulos");

export class OpenApiService {
  getSpecsList(): SpecDto[] {
    const modules = fs.readdirSync(openapiFolder, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());

    const specs: SpecDto[] = [];

    modules.forEach((mod) => {
      const modPath = path.join(openapiFolder, mod.name);
      const files = fs.readdirSync(modPath).filter(f => f.endsWith(".yaml"));

      files.forEach((file) => {
        specs.push(
          new SpecDto(
            `/docs/specs/${mod.name}/${file}`,
            `${mod.name}/${file.replace(".yaml", "")}`
          )
        );
      });
    });

    return specs;
  }

  getSpecContent(moduleName: string, fileName: string): string | null {
    const filePath = path.join(openapiFolder, moduleName, fileName);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    return fs.readFileSync(filePath, "utf-8");
  }
}
