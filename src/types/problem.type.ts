import { TestCase } from "./testCase.type";

export interface Problem {
  id: number;
  name: string;
  description: string;
  difficulty: number;
  tags: string[];
  template: string;
  testCases: TestCase[];
  solution: string;
}
export type Problems = Problem[];
