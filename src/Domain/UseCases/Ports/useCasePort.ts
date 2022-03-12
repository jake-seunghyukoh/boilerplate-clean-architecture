export interface UseCasePort<inputT, outputT> {
  execute(input: inputT): outputT;
}

export interface UseCasePortWithoutInput<outputT> {
  execute(): outputT;
}
