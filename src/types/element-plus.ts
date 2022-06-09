// 声明常用类型
import { ElForm } from 'element-plus';
import { FormItemRule } from 'element-plus';

export type IElForm = InstanceType<typeof ElForm>
export type IFormRule = Record<string, FormItemRule[]>