


const scriptsInEvents = {

	async Checkbox_Event6_Act1(runtime, localVars)
	{
		const obj = runtime.objects.Checkbox.getFirstPickedInstance();
		const f = obj.animationFrame == 0 ? 1 : 0;
		setTimeout(() => {
			const checkbox = obj;
			const frame = f;
			checkbox.animationFrame = frame;
			//console.log(`Checkbox ${checkbox.instVars.ID} set to ${f == 1 ? 0 : 1}`)
		}, 500)
	},

	async Checkbox_Event6_Act3(runtime, localVars)
	{
		const cb = runtime.objects.Checkbox.getFirstPickedInstance();
		Game.Game.Input.OnCheckboxClicked(cb, localVars.enabled);
	},

	async Checkbox_Event22_Act1(runtime, localVars)
	{
		const cb = runtime.objects.Checkbox.getFirstPickedInstance();
		Game.Game.Input.OnCheckboxClicked(cb, localVars.enabled);
	},

	async SettingsView_Event3_Act1(runtime, localVars)
	{
		Game.GUI.FindAndSetButtonEnabled('action::LoadGameFromFile', true);
	},

	async SettingsView_Event5_Act1(runtime, localVars)
	{
		Game.GUI.FindAndSetButtonEnabled('action::LoadGameFromFile', false);
	},

	async SettingsView_Event9_Act2(runtime, localVars)
	{
		Game.Game.Loading.LoadGameFromString(Game.LoadType.Manual, localVars.data, true);
	},

	async SettingsView_Event11_Act2(runtime, localVars)
	{
		Game.Game.Loading.LoadGameFromString(Game.LoadType.Manual, localVars.data, true);
	},

	async SettingsView_Event13_Act1(runtime, localVars)
	{
		console.log('Filename: ' + localVars.filename)
	},

	async SettingsView_Event16_Act1(runtime, localVars)
	{
		Game.GUI.FindAndSetButtonEnabled('action::LoadGameFromString', true);
	},

	async SettingsView_Event18_Act1(runtime, localVars)
	{
		Game.GUI.FindAndSetButtonEnabled('action::LoadGameFromString', false);
	},

	async Utils_Event2_Act1(runtime, localVars)
	{
		let rgb = Game.UtilsMath.HexToRGB255(localVars.hex);
		localVars.r = rgb.r255;
		localVars.g = rgb.g255;
		localVars.b = rgb.b255;
		//console.log(`rgb: ${rgb.r}, ${rgb.g}, ${rgb.b}`)
	},

	async Utils_Event10_Act1(runtime, localVars)
	{
		localVars.output = Game.GameUtils.GetNumberText(localVars.value);
	},

	async Screen_Event3_Act2(runtime, localVars)
	{
		Game.Game.C3Events.OnFullscreenToggled.Trigger(Game.Game, { isFullscreen: true })
	},

	async Screen_Event5_Act2(runtime, localVars)
	{
		Game.Game.C3Events.OnFullscreenToggled.Trigger(Game.Game, { isFullscreen: false })
	},

	async Data_Event2_Act1(runtime, localVars)
	{
		//Game.Input.OnButtonClicked("action::Save");
		await Game.Shortcuts.SaveGame();
	},

	async Data_Event4_Act1(runtime, localVars)
	{
		//Game.Input.OnButtonClicked("action::Load");
		await Game.Shortcuts.LoadGame();
	},

	async Debug_Event23_Act1(runtime, localVars)
	{
		Game.Game.Views.MoveCamera(-1);
	},

	async Debug_Event24_Act1(runtime, localVars)
	{
		Game.Game.Views.MoveCamera(1);
	},

	async Debug_Event25_Act1(runtime, localVars)
	{
		Game.Game.Views.MoveCamera(0, -1);
	},

	async Debug_Event26_Act1(runtime, localVars)
	{
		Game.Game.Views.MoveCamera(0, 1);
	},

	async Input_Event18_Act1(runtime, localVars)
	{
		const slider = runtime.objects.ScrollbarSlider.getFirstPickedInstance();
		// Game.Game.Input.OnScrollbarMoving("setPosition", slider.y);
		Game.Game.Input.OnScrollbarSliderDragged(slider);
	},

	async Input_Event19_Act1(runtime, localVars)
	{
		Game.Game.Input.OnMouseWheelMoved("up")
	},

	async Input_Event20_Act1(runtime, localVars)
	{
		Game.Game.Input.OnMouseWheelMoved("down")
	},

	async Input_Event22_Act1(runtime, localVars)
	{
		localVars.okay = Game.Game.Input.IsCanAccessInput() ? 1 : 0;
	},

	async Input_Event25_Act1(runtime, localVars)
	{
		const monster = runtime.objects.Monster.getFirstPickedInstance();
		const stats = Game.Game.Storage.GameObjects.GetItemOfClass("Monster", monster.instVars.Type);
		
		localVars.damagePercent = stats.ClickDamagePercent.Value.AsNumber;
		localVars.reloadMs = stats.ClickDamageReloadMS.Value.AsNumber
	},

	async Input_Event25_Act7(runtime, localVars)
	{
		Game.Content.Statistics.Gameplay.TotalClicks.Value++;
		Game.Content.Statistics.Gameplay.TotalClickDamage.Value = Game.Float.Plus(Game.Content.Statistics.Gameplay.TotalClickDamage.Value, localVars.actualDamage);
	},

	async Input_Event28_Act3(runtime, localVars)
	{
		Game.Game.Input.OnSliderValueChanged(localVars.sbName, localVars.sbValue);
	},

	async Input_Event28_Act4(runtime, localVars)
	{
		console.log(" >>>>>>>>> ON CHANGED")
	},

	async Input_Event32_Act1(runtime, localVars)
	{
		throw new Error(`Didn't find slider bar: ${localVars.name}`)
	},

	async Input_Event35_Act1(runtime, localVars)
	{
		Game.Game.LogWarning("C3::UpdateAudioVolume", `No music playing with tag: 'music'`)
	},

	async Input_Event47_Act1(runtime, localVars)
	{
		console.log(`UpdateAudioVolume options is not handled`);
	},

	async Input_Event52_Act1(runtime, localVars)
	{
		Game.Game.Input.OnIconClicked(runtime.objects.Icon.getFirstPickedInstance());
	},

	async Input_Event61_Act1(runtime, localVars)
	{
		throw new Error(`Can't find button uid '${localVars.uid}'`)
	},

	async Input_Event66_Act1(runtime, localVars)
	{
		throw new Error(`Can't find selector uid '${localVars.uid}'`)
	},

	async Init_Event13_Act1(runtime, localVars)
	{
		await Game.Init();
	},

	async Init_Event15_Act1(runtime, localVars)
	{
		await Game.Init();
	},

	async Init_Event21_Act2(runtime, localVars)
	{
		//console.log(localVars.val);
		Game.Game.Input.SetOption({
			ID: "Notation",
			Value: localVars.val
		});
		
	},

	async Init_Event41_Act3(runtime, localVars)
	{
		console.log(`Game speed (in-game) set to: ${localVars.value}`)
	},

	async Init_Event57_Act1(runtime, localVars)
	{
		if (Game && Game.Game) Game.Game.C3Events.OnResumed.Trigger(null);
		if (Game && Game.Game) Game.Game.C3Events.OnSuspendedOrResumed.Trigger({ isSuspended: false });
	},

	async Init_Event58_Act1(runtime, localVars)
	{
		if (Game && Game.Game) Game.Game.C3Events.OnSuspended.Trigger(null);
		if (Game && Game.Game) Game.Game.C3Events.OnSuspendedOrResumed.Trigger({ isSuspended: true });
	},

	async Init_Event59_Act1(runtime, localVars)
	{
		console.log("[>><<] OFFLINE READY")
	},

	async Init_Event60_Act1(runtime, localVars)
	{
		console.log("[>><<] UPDATE FOUND")
	},

	async Init_Event61_Act1(runtime, localVars)
	{
		console.log("[>><<] UPDATE READY")
	},

	async Init_Event64_Act1(runtime, localVars)
	{
		console.log("-------------\nON MOBILE (initial set)\n------------");
	},

	async Init_Event65_Act1(runtime, localVars)
	{
		console.log("-------------\nNOT on mobile (initial set)\n------------");
	},

	async Init_Event67_Act4(runtime, localVars)
	{
		Game.Game.Input.Events.IsInTouch.Trigger({ x: localVars.touchX, y: localVars.touchY })
	},

	async Init_Event69_Act3(runtime, localVars)
	{
		Game.Game.Input.Events.OnTap.Trigger({ x: localVars.touchX, y: localVars.touchY })
	},

	async Init_Event71_Act3(runtime, localVars)
	{
		Game.Game.Input.Events.OnTouchStart.Trigger({ x: localVars.touchX, y: localVars.touchY })
	},

	async Init_Event73_Act3(runtime, localVars)
	{
		Game.Game.Input.Events.OnTouchEnd.Trigger({ x: localVars.touchX, y: localVars.touchY })
	},

	async LoadingRoom_Event39_Act2(runtime, localVars)
	{
		console.log(`Sound data loaded: ${runtime.globalVars.IntroVolume}`);
	},

	async LoadingRoom_Event43_Act2(runtime, localVars)
	{
		console.log(`Not sound data found, set to default: ${runtime.globalVars.IntroVolume}`);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

