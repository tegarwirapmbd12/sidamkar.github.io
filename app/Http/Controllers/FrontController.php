<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use App\Models\Province;
use App\Models\Regency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FrontController extends Controller
{
    public function index(Request $request)
    {

        $pegawai = Pegawai::paginate(10)->withQueryString();
        $provinces = DB::table('provinces')->get();
        $query = Pegawai::query();
        $name = $request->input('name');
        $instansi = $request->input('instansi');
        $kode_verifikasi = $request->input('kode_verifikasi');
        $provinces = DB::table('provinces')->get();
        $province_id = $request->input('province_id');
        $query = Pegawai::query();
        if ($name) {
            $query->where('name', 'like', '%' . $name . '%');
        }
        if ($instansi) {
            $query->where('instansi', 'like', '%' . $instansi . '%');
        }
        if ($kode_verifikasi) {
            $query->where('kode_verifikasi', $kode_verifikasi);
        }
        if ($province_id) {
            $query->where('province_id',   $province_id )->get();
        }

        $pegawai = $query->paginate(10);
        $request->flash();

        return view('front.index', compact('pegawai', 'provinces'));
    }

    public function provinsi()
    {
        $data = Province::where('name', 'LIKE', '%'. request('q').'%')->paginate(10);

        return response()->json($data);
    }
    public function regency()
    {
        $data = Regency::where('name', 'LIKE', '%'. request('q').'%')->paginate(10);

        return response()->json($data);
    }

    public function show($id)
    {
        $pegawai = Pegawai::find($id);
        return view('front.show',['pegawai' => $pegawai]);
    }


}
