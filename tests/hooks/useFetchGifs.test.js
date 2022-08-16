import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en el Hook useFetchGifs', () => {
	const category = 'Prueba';

	test('Debe de regresar el estado inicial', async () => {
		const { result } = renderHook(() => useFetchGifs(category));
		const { images, isLoading } = result.current;
		expect(images).toHaveLength(0);
		expect(isLoading).toBeTruthy();
	});

	test('Debe de retornar un arreglo de imágenes y isLoading en false', async () => {
		const { result } = renderHook(() => useFetchGifs(category));
		// const { images, isLoading } = result.current;

		await waitFor(() =>
			expect(result.current.images.length).toBeGreaterThan(0)
		);

		const { images, isLoading } = result.current;

		expect(isLoading).toBeFalsy();
	});
});
