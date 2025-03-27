export const success = (data: any) => ({ success: true, data });
export const failure = (error: string) => ({ success: false, error });
